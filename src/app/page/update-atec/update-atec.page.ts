import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-update-atec',
  templateUrl: './update-atec.page.html',
  styleUrls: ['./update-atec.page.scss'],
})
export class UpdateATECPage implements OnInit {
  userDetails: any = [];
  questionsconten = [];
  Data: any;
  getlistquestion = [];
  Dataquestion = {
    code: '',
    NamePost: '',
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

  }
  createdId = "";
  DataquestionData = null;
  OptionsData = null;
  speechAnswers = [];
  sociabilityAnswers = [];
  sensoryCognitiveAwarenessAnswers = [];
  healthPhysicalBehaviorAnswers = [];
  txtReply = "";
  pageKQ: any;
  checkButtonKQ = false;
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navCtr: NavController,
    public netWork: Network
  ) {


    this.Data = this.router.getCurrentNavigation().extras.queryParams.createdId;
    this.pageKQ = this.router.getCurrentNavigation().extras.queryParams.pageKQ;
    this.service.Page = "postTest";
    this.service.backPage = this.pageKQ;
    this.service.total = 1;
    this.service.PostTestId = this.Data;
    this.service.ApiDeleteTest = "atec/answersheets/";
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
          var check = true;
          for (var i = 0; i < this.getlistquestion.length; i++) {
            if (this.getlistquestion[i].selectedOptionId == undefined) {
              this.Dataquestion = this.getlistquestion[i];
              check = false;
              break;
            }
          }
          if (check) {
            this.Dataquestion = this.getlistquestion[0];
          }
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
    if (data.selectedOptionId != undefined) {
      if (questionData == "healthPhysicalBehaviorAnswers") {
        this.healthPhysicalBehaviorAnswers.push({
          questionId: data.question.id,
          selectedOptionId: data.selectedOptionId
        });
      }
      if (questionData == "sensoryCognitiveAwarenessAnswers") {
        this.sensoryCognitiveAwarenessAnswers.push({
          questionId: data.question.id,
          selectedOptionId: data.selectedOptionId
        });
      }
      if (questionData == "sociabilityAnswers") {
        this.sociabilityAnswers.push({
          questionId: data.question.id,
          selectedOptionId: data.selectedOptionId
        });
      }
      if (questionData == "speechAnswers") {
        this.speechAnswers.push({
          questionId: data.question.id,
          selectedOptionId: data.selectedOptionId
        });
      }
    }
  }
  NextQuestion() {

    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
    else {
      this.checkButtonKQ = true;
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }

  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    if (this.DataquestionData.questionData == "healthPhysicalBehaviorAnswers") {
      var check = true;
      this.healthPhysicalBehaviorAnswers.forEach(element => {
        if (element.questionId == this.DataquestionData.id) {
          element.questionId = this.DataquestionData.id;
          element.selectedOptionId = this.OptionsData.id;
          check = false;
        }
      });
      if (check) {
        this.healthPhysicalBehaviorAnswers.push({
          questionId: this.DataquestionData.id,
          selectedOptionId: this.OptionsData.id
        });
      }
    }
    if (this.DataquestionData.questionData == "sensoryCognitiveAwarenessAnswers") {
      var check = true;
      this.sensoryCognitiveAwarenessAnswers.forEach(element => {
        if (element.questionId == this.DataquestionData.id) {
          element.questionId = this.DataquestionData.id;
          element.selectedOptionId = this.OptionsData.id;
          check = false;
        }
      });
      if (check) {
        this.sensoryCognitiveAwarenessAnswers.push({
          questionId: this.DataquestionData.id,
          selectedOptionId: this.OptionsData.id
        });
      }
    }
    if (this.DataquestionData.questionData == "sociabilityAnswers") {
      var check = true;
      this.sociabilityAnswers.forEach(element => {
        if (element.questionId == this.DataquestionData.id) {
          element.questionId = this.DataquestionData.id;
          element.selectedOptionId = this.OptionsData.id;
          check = false;
        }
      });
      if (check) {
        this.sociabilityAnswers.push({
          questionId: this.DataquestionData.id,
          selectedOptionId: this.OptionsData.id
        });
      }
    }
    if (this.DataquestionData.questionData == "speechAnswers") {
      var check = true;
      this.speechAnswers.forEach(element => {
        if (element.questionId == this.DataquestionData.id) {
          element.questionId = this.DataquestionData.id;
          element.selectedOptionId = this.OptionsData.id;
          check = false;
        }
      });
      if (check) {
        this.speechAnswers.push({
          questionId: this.DataquestionData.id,
          selectedOptionId: this.OptionsData.id
        });
      }
    }
    this.toast.showLoadingNext("");
    setTimeout(() => {
      this.NextQuestion();
    }, 200);
  }
  BackQuestion() {
    if (parseInt(this.Dataquestion.index) - 2 >= 0) {
      var index = parseInt(this.Dataquestion.index) - 2;
      this.Dataquestion = this.getlistquestion[index];
    }
  }
  PutanswersheetATEC(dataCheck) {
    var body = {
      "isCompleted": dataCheck,
      "healthPhysicalBehaviorAnswers": this.healthPhysicalBehaviorAnswers,
      "sensoryCognitiveAwarenessAnswers": this.sensoryCognitiveAwarenessAnswers,
      "sociabilityAnswers": this.sociabilityAnswers,
      "speechAnswers": this.speechAnswers,
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'atec/answersheets/' + this.Data, body).subscribe
        (rs => {
          this.service.message("Lưu thành công!");
          if (!dataCheck) {
            this.router.navigate([this.pageKQ])
          }
          else {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                createdId: this.Data,
                pageKQ: this.pageKQ
              }
            };
            this.router.navigate(['/ketqua-atec'], navigationExtras);
            if (this.service.CheckLoading) {
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          }
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
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  checkModal = true;
  async backpage() {
    const myModal = await this.modalCtrl.create({
      component: MessageConfirmPage,
      componentProps: {
        p: "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
      },
      cssClass: "modalmesss"
    });
    myModal.onDidDismiss().then((rs) => {

      if (rs.data) {
        this.navCtrl.pop();
      }
    });
    return await myModal.present();

  }
  KETQUA() {
    this.PutanswersheetATEC(true);
  }
  NextData() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
  }
}
