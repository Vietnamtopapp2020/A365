import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-qol',
  templateUrl: './qol.page.html',
  styleUrls: ['./qol.page.scss'],
})
export class QolPage implements OnInit {
  txtReply = "";
  qolDetails = [];
  getlistquestion = [];
  notifi = [{
    text: 'Lưu thành công'
  }]
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
  };
  createdId = "";
  data = null;
  answers = [];
  OptionsData: any;
  DataquestionData = null;
  pageKQ: any;
  selectedOptionId: string;
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalController: ModalController,
    public navCtr: NavController,
    public netWork: Network
  ) {
    this.service.Page = "";
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.data = this.router.getCurrentNavigation().extras.queryParams.ObjectPage;
    this.pageKQ = this.router.getCurrentNavigation().extras.queryParams.pageKQ;
    this.service.Page = "postTest";
    this.service.backPage = this.pageKQ;
    this.service.total = 0;
    this.service.ApiDeleteTest = "qol/answersheets/";
    this.Getqol();
  }

  ngOnInit() {

  }
  Getqol() {
    var body = {
      childId: this.data.id
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionmchatR(this.service.getHost() + 'qol/answersheets', body).subscribe(
        rs => {
          var result = rs.json();
          this.createdId = result.createdId;
          this.service.PostTestId = this.createdId;
          this.service.GetanswersheetsMchartR(this.service.getHost() + 'qol/answersheets/' + result.createdId).subscribe(rs1 => {
            var answersheets = rs1.json();
            var index = 0;
            answersheets.answers.forEach(element => {
              index++;
              this.inputData('answers', element, index);
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
    this.getlistquestion.push({
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
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    if (this.DataquestionData.questionData == "answers") {
      if (this.selectedOptionId = "") {
        alert('Trường này không được để chống');
      } else
        var check = true;
      for (var i = 0; i < this.answers.length; i++) {
        if (this.answers[i].questionId == this.DataquestionData.id) {
          this.answers[i].selectedOptionId = this.OptionsData.id;
          check = false;
          break;
        }
      }
      if (check) {
        this.answers.push({
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
  BackQuestion() {
    if (parseInt(this.Dataquestion.index) - 2 >= 0) {
      var index = parseInt(this.Dataquestion.index) - 2;
      this.Dataquestion = this.getlistquestion[index];
    }
  }
  Putanswersheetmchatr() {
    var body = {
      "isCompleted": false,
      "answers": this.answers,
      _id: this.createdId,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'qol/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.service.message(this.notifi[0].text);
          this.router.navigate(["/listhistory-qol"])
        });

    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  Putanswersheetmchatr1() {
    var checkdata = true
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body = {
      "isCompleted": checkdata,
      "answers": this.answers,
      _id: this.createdId,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'qol/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.service.message(this.notifi[0].text);
          let navigationExtras: NavigationExtras = {
            queryParams: {
              createdId: this.createdId,
              pageKQ: this.pageKQ
            }
          };
          this.router.navigate(['/ketquaqol'], navigationExtras);
        });

    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  KETQUA() {
    if (this.answers.length == this.getlistquestion.length) {
      this.Putanswersheetmchatr1();
    }
    else {
      this.service.message("Vui lòng trả lời đầy đủ câu hỏi!")
    }
  }
  checkModal = true
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
            this.DeleteQOL();
          }
          this.navCtr.pop();
        }
      });
      return await myModal.present();
    }
  }
  DeleteQOL() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'qol/answersheets/' + this.createdId).subscribe
        (rs => {
        }, error => {
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
