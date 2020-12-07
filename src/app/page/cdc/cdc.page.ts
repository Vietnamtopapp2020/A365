import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-cdc',
  templateUrl: './cdc.page.html',
  styleUrls: ['./cdc.page.scss'],
})
export class CdcPage implements OnInit {
  slideOptsImg = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000,
  };
  getlistquestion = [];
  ResutlMchatR: any = [];
  answersheets: any;
  skip = 0;
  take = 10;
  sort = '';
  query = '';
  completed = true;
  question: any;
  slide: any
  postname: any;
  notifi = [{
    text: 'Lưu thành công'
  }]
  Data: any;
  data = null;
  answers = [];
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
  OptionsData = null;
  DataquestionData = null;
  childId: any;
  dataBackPage: any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    private sanitizer: DomSanitizer,
    public netWork: Network
  ) {
    this.service.Page = "";

    this.data = this.router.getCurrentNavigation().extras.queryParams.ObjectPage;
    this.dataBackPage = this.router.getCurrentNavigation().extras.queryParams.page;
    this.service.Page = "postTest";
    this.service.backPage = this.dataBackPage;
    this.service.total = 0;
    this.service.ApiDeleteTest = "cdc/answersheets/";
    this.Getquestionmchatr();

  }
  ngOnInit() {

  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  Getquestionmchatr() {
    var body = {
      childId: this.data.id
    };

    // Call API post câu hỏi trong CDC
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionCDC(this.service.getHost() + 'cdc/answersheets', body).subscribe
        (rs => {
          var result = rs.json();
          this.createdId = result.createdId;
          this.service.PostTestId = this.createdId;
          this.service.GetanswersheetsCDC(this.service.getHost() + 'cdc/answersheets/' + result.createdId).subscribe
            (rs1 => {
              this.answersheets = rs1.json();
              this.postname = this.answersheets.questionnare.name;
              var index = 0;
              this.answersheets.answers.forEach(element => {
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
        });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  // update câu trả lời
  Putanswersheetmchatr(dataCheck) {
    var checkdata = true;
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body: any;
    if (dataCheck) {
      body = {
        "isCompleted": checkdata,
        "answers": this.answers
      }
    }
    else {
      body = {
        "isCompleted": false,
        "answers": this.answers
      }
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'cdc/answersheets/' + this.createdId, body).subscribe
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
        check = false
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
      this.service.total = 1;
    }
    else {
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  KETQUA() {
    if (this.answers.length == this.getlistquestion.length) {
      this.Putanswersheetmchatr(true);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          createdId: this.createdId,
          childId: this.data.id,
          getlistquestion: this.getlistquestion,
          answers: this.answers,
          page: '/cdc',
          pageKQ: this.dataBackPage
        }
      };
      this.router.navigate(['/administrative-regions'], navigationExtras);
    }
    else {
      this.service.message("Vui lòng trả lời đầy đủ câu hỏi!")
    }
  }
  checkModal = true;
  async backpage() {
    var mess = "";
    if (this.answers.length == 0) {
      mess = "Bài làm sẽ tự động bị xóa nếu bạn thoát và không trả lời câu nào. Bạn có chắc chắn muốn thoát?"
    }
    else {
      mess = "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
    }
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalController.create({
        component: MessageConfirmPage,
        componentProps: {
          p: mess
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          if (this.answers.length == 0) {
            this.DeleteCDC();
          }
          this.router.navigate([this.dataBackPage])
        }
      });
      return await myModal.present();
    }

  }
  DeleteCDC() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'cdc/answersheets/' + this.createdId).subscribe
        (rs => {
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
}

