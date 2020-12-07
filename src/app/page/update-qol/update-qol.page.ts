import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { element } from 'protractor';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-update-qol',
  templateUrl: './update-qol.page.html',
  styleUrls: ['./update-qol.page.scss'],
})
export class UpdateQOLPage implements OnInit {

  qolDetails = [];
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
  answer = [];
  txtReply = "";
  OptionsData: any;
  DataquestionData: any;
  answers = [];
  pageKQ: any;
  selectedOptionId: string;
  checkButtonKQ = false;
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalController: ModalController,
    public netWork: Network
  ) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.data = this.router.getCurrentNavigation().extras.queryParams.createdId;
    this.pageKQ = this.router.getCurrentNavigation().extras.queryParams.pageKQ;
    this.service.Page = "postTest";
    this.service.backPage = this.pageKQ;
    this.service.total = 1;
    this.service.PostTestId = this.data;
    this.service.ApiDeleteTest = "mchatr/answersheets/";
    this.GetResutlQOL(this.data);
  }

  ngOnInit() {
  }
  GetResutlQOL(data) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'qol/answersheets/' + data).subscribe
        (rs => {
          var answersheets = rs.json();
          var index = 0;
          answersheets.answers.forEach(element => {
            index++;
            this.inputData('answers', element, index);
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
    if (data.selectedOptionId != undefined) {
      this.answers.push({
        questionId: data.question.id,
        selectedOptionId: data.selectedOptionId,
      });
    }
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  BackQuestion() {
    var index = parseInt(this.Dataquestion.index) - 2;
    this.Dataquestion = this.getlistquestion[index];
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
    }
    else {
      this.checkButtonKQ = true;
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  Putanswerqol1() {
    var body = {
      "isCompleted": true,
      "answers": this.answers,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'qol/answersheets/' + this.data, body).subscribe
        (rs => {
          this.service.message("Lưu thành công!");
          let navigationExtras: NavigationExtras = {
            queryParams: {
              createdId: this.data,
              pageKQ: this.pageKQ
            }
          };
          this.router.navigate(['/ketquaqol'], navigationExtras);
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
  Putanswerqol() {
    var body = {
      "isCompleted": false,
      "answers": this.answers,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'qol/answersheets/' + this.data, body).subscribe
        (rs => {
          this.router.navigate([this.pageKQ]);
          this.service.message("Lưu thành công!");
          // this.router.navigate(["/listhistory-qol"])
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
          this.router.navigate([this.pageKQ]);
        }
      });
      return await myModal.present();
    }
  }
  KETQUA() {
    // if (this.answers.length == this.getlistquestion.length) {
    this.Putanswerqol1();
    // }
    // else {
    //   this.service.message("Vui lòng trả lời hết câu hỏi!")
    // }
  }
  NextData() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
  }
}
