import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { stringify } from 'querystring';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-update-cdc-view',
  templateUrl: './update-cdc-view.page.html',
  styleUrls: ['./update-cdc-view.page.scss'],
})
export class UpdateCdcViewPage implements OnInit {
  getlistquestion = [];
  ResutlASQ = [];
  ResutlASQ1 = [];
  data = null;
  answers = [];
  skip = 0;
  take = 10;
  sort = '';
  query = '';
  txtname = '';
  Data: any;
  notifi = [{
    text: 'Lưu thành công'
  }]
  childrenId: "";
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
    ],
    questionData: '',
    selectedOptionId: '',
    sliderImages: [],
    type: "",
    updatedAt: '',
    linkYoutube: false,
    ChecklinkYoutube: "https://www.youtube.com/embed/Za_QJe3280E?showinfo=0",
  };
  createdId = "";
  communicationAnswers = [];
  grossMotorAnswers = [];
  fineMotorAnswers = [];
  problemSolvingAnswers = [];
  personalSocialAnswers = [];
  overallAnswers = [];
  OptionsData = null;
  DataquestionData = null;
  txtReply = "";
  postname: any;
  slideOptsImg = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000,
  };
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navCtr: NavController,
    private sanitizer: DomSanitizer,
    public netWork: Network
  ) {
    this.service.Page = "";
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetResutlCDC();
  }

  ngOnInit() {
  }
  GetResutlCDC() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'cdc/answersheets/' + this.Data.createdId).subscribe
        (rs => {

          var answersheets = rs.json();
          this.postname = answersheets.questionnare.name;
          var index = 0;
          answersheets.answers.forEach(element => {
            index++;
            this.inputData("answers", element, index);
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
  backpage() {
    this.router.navigate(['/ketquacdc'])
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  PutanswerCDC() {
    var checkdata = true;
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body = {
      "isCompleted": checkdata,
      "answers": this.answers
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'cdc/answersheets/' + this.Data.createdId, body).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message(this.notifi[0].text);
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
  inputData(questionData, data, index) {
    var options = []
    data.question.options.forEach(optionsData => {
      options.push({
        content: this.getSafehtml(optionsData.content),
        hasInput: optionsData.hasInput,
        id: optionsData.id,
        inputType: optionsData.inputType,
        point: optionsData.point,
      })
    });
    var linkYoutube = "https://www.youtube.com/embed/Za_QJe3280E?showinfo=0";
    var ChecklinkYoutube = false;
    var slip = data.question.content.indexOf("</p>");
    var slipFrame = data.question.content.indexOf("www.youtube.com");
    if (slipFrame != -1) {
      var EndLink = data.question.content.indexOf("></iframe>");
      linkYoutube = data.question.content.slice(slipFrame - 8, EndLink - 1);
      ChecklinkYoutube = true;
    }
    this.getlistquestion.push({
      questionData: questionData,
      index: index,
      code: data.question.code,
      content: this.getSafehtml(data.question.content.slice(0, slip + 4)),
      createdAt: data.question.createdAt,
      id: data.question.id,
      isDeleted: data.question.isDeleted,
      options: options,
      sliderImages: data.question.sliderImages,
      type: data.question.type,
      updatedAt: data.question.updatedAt,
      linkYoutube: linkYoutube,
      ChecklinkYoutube: ChecklinkYoutube,
      selectedOptionId: data.selectedOptionId,
    });
  }
  public getSafehtml(html: string,) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  NextQuestion() {
    if (this.Dataquestion.index < this.getlistquestion.length.toString()) {
      var index = this.Dataquestion.index;
      this.Dataquestion = this.getlistquestion[index];
    }
  }
  BackQuestion() {
    if (parseInt(this.Dataquestion.index) - 2 >= 0) {
      var index = parseInt(this.Dataquestion.index) - 2;
      this.Dataquestion = this.getlistquestion[index];
    }
  }
  KETQUA() {
    this.PutanswerCDC();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.Data.createdId,
        childId: this.Data.childId,
      }
    };
    this.router.navigate(['/administrative-regions'], navigationExtras);
  }
  ParseIntData(Number) {
    return parseInt(Number);
  }
}
