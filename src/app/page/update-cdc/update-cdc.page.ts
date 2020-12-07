import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-update-cdc',
  templateUrl: './update-cdc.page.html',
  styleUrls: ['./update-cdc.page.scss'],
})
export class UpdateCDCPage implements OnInit {
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
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "postTest";
    this.service.backPage = "/listhistory-cdc";
    this.service.total = 1;
    this.service.PostTestId = this.Data.createdId;
    this.service.ApiDeleteTest = "cdc/answersheets/";
    this.GetResutlCDC();
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
  checkModal = true;
  async backpage() {
    var mess = "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?";
    const myModal = await this.modalCtrl.create({
      component: MessageConfirmPage,
      componentProps: {
        p: mess
      },
      cssClass: "modalmesss"
    });
    if (this.checkModal) {
      this.checkModal = false;
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          this.router.navigate(["/listhistory-cdc"])
        }
      });
      return await myModal.present();
    }
  }
  PutanswerCDC(dataCheck) {
    
    var body: any;
    body = {
      "isCompleted": dataCheck,
      "answers": this.answers
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'cdc/answersheets/' + this.Data.createdId, body).subscribe
        (rs => {
          this.service.message(this.notifi[0].text);
          if (!dataCheck) {
            this.router.navigate(["/listhistory-cdc"])
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

    if (data.selectedOptionId != undefined) {
      this.answers.push({
        questionId: data.question.id,
        selectedOptionId: data.selectedOptionId,
      });
    }
  }
  public getSafehtml(html: string,) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  // lấy id câu hỏi,câu trả lời

  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    var check = true
    this.answers.forEach(element => {
      if (element.questionId == this.DataquestionData.id) {
        element.selectedOptionId = this.OptionsData.id;
        check = false;
      }
    });
    if (check) {
      this.answers.push({
        questionId: this.DataquestionData.id,
        selectedOptionId: this.OptionsData.id
      });
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
  NextQuestion() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
    else {
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  KETQUA() {
    if (this.answers.length == this.getlistquestion.length) {
      this.PutanswerCDC(true);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          createdId: this.Data.createdId,
          childId: this.Data.childId,
          page: "/update-cdc",
          pageKQ: "/listhistory-cdc"
        }
      };
      this.router.navigate(['/administrative-regions'], navigationExtras);
    }
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
    }
  }
  NextData() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
  }
}
