import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-update-atec-view',
  templateUrl: './update-atec-view.page.html',
  styleUrls: ['./update-atec-view.page.scss'],
})
export class UpdateAtecViewPage implements OnInit {
  userDetails: any = [];
  questionsconten = [];
  Data: any;
  getlistquestion = [];
  Dataquestion = {
    code: '',
    content: '',
    createdAt: '',
    id: '',
    index: '',
    isDeleted: '',

    options: [
      {
        id: "",
        content: "",
      },
      {
        id: "",
        content: "",
      },
      {
        id: "",
        content: "",
      },
      {
        id: "",
        content: "",
      },
    ],
    questionData: '',
    selectedOptionId: '',
    sliderImages: [],
    type: "",
    updatedAt: '',
    NamePost: '',

  }
  createdId = "";
  DataquestionData = null;
  OptionsData = null;
  speechAnswers = [];
  sociabilityAnswers = [];
  sensoryCognitiveAwarenessAnswers = [];
  healthPhysicalBehaviorAnswers = [];
  txtReply = "";

  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navCtr: NavController,
    public netWork: Network
  ) {
    this.service.Page = "";
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetResutlAtec(this.Data);
  }

  ngOnInit() {
  }
  GetResutlAtec(data) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'atec/answersheets/' + data).subscribe
        (rs => {

          var answersheets = rs.json();
          var index = 0;

          answersheets.sensoryCognitiveAwarenessAnswers.forEach(element => {
            index++;
            this.inputData("sensoryCognitiveAwarenessAnswers", element, index, "Lời nói/ Ngôn ngữ/ Giao tiếp");
          });
          answersheets.sociabilityAnswers.forEach(element => {
            index++;
            this.inputData("sociabilityAnswers", element, index, "Kỹ năng xã hội");
          });
          answersheets.speechAnswers.forEach(element => {
            index++;
            this.inputData("speechAnswers", element, index, "Nhận thức");
          });
          answersheets.healthPhysicalBehaviorAnswers.forEach(element => {
            index++;
            this.inputData("healthPhysicalBehaviorAnswers", element, index, "Sức khỏe/ Thể chất/ Hành vi");
          });
          this.Dataquestion = this.getlistquestion[0];
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        });
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  inputData(questionData, data, index, NamePost) {
    var options = []
    data.question.options.forEach(optionsData => {
      options.push({
        content: this.getSafehtml(optionsData.content),
        hasInput: optionsData.hasInput,
        id: optionsData.id,
        inputType: optionsData.inputType,
        point: optionsData.point,
      });
    });
    this.getlistquestion.push({
      NamePost: NamePost,
      questionData: questionData,
      index: index,
      code: data.question.code,
      content: this.getSafehtml(data.question.content),
      createdAt: data.question.createdAt,
      id: data.question.id,
      isDeleted: data.question.isDeleted,
      options: options,
      sliderImages: data.question.sliderImages,
      type: data.question.type,
      updatedAt: data.question.updatedAt,
      selectedOptionId: data.selectedOptionId,

    });
  }
  NextQuestion() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
  }

  BackQuestion() {
    if (parseInt(this.Dataquestion.index) - 2 >= 0) {
      var index = parseInt(this.Dataquestion.index) - 2;
      this.Dataquestion = this.getlistquestion[index];
    }
  }
  PutanswersheetATEC() {

    var checkdata = true;
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body = {
      "isCompleted": checkdata,
      "healthPhysicalBehaviorAnswers": this.healthPhysicalBehaviorAnswers,
      "sensoryCognitiveAwarenessAnswers": this.sensoryCognitiveAwarenessAnswers,
      "sociabilityAnswers": this.sociabilityAnswers,
      "speechAnswers": this.speechAnswers,

    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'atec/answersheets/' + this.Data, body).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message("Lưu thành công!");
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.toast.showToast;
        });
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  backpage() {
    this.navCtr.pop();
  }
  KETQUA() {
    var total = this.healthPhysicalBehaviorAnswers.length + this.sensoryCognitiveAwarenessAnswers.length + this.sociabilityAnswers.length + this.speechAnswers.length;
    if (total == this.getlistquestion.length) {
      this.PutanswersheetATEC();
      let navigationExtras: NavigationExtras = {
        queryParams: {
          createdId: this.Data
        }
      };
      this.router.navigate(['/ketqua-atec'], navigationExtras);
    }
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
    }
  }
  ParseIntData(Number) {
    return parseInt(Number);
  }
}
