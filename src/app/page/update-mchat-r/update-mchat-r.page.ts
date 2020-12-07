import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { element } from 'protractor';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-update-mchat-r',
  templateUrl: './update-mchat-r.page.html',
  styleUrls: ['./update-mchat-r.page.scss'],
})
export class UpdateMchatRPage implements OnInit {
  selectedOptionId: any;
  getlistquestion = [];
  ResutlMchatR: any = [];
  skip = 0;
  take = 10;
  sort = '';
  query = '';
  completed = true;
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
  };
  createdId = "";
  OptionsData = null;
  DataquestionData = null;
  txtReply = "";
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "postTest";
    this.service.backPage = "/listhistory-mchat-r";
    this.service.total = 1;
    this.service.PostTestId = this.Data;
    this.service.ApiDeleteTest = "mchatr/answersheets/";
    this.GetResutlmcharR(this.Data);
  }

  ngOnInit() {
  }
  GetResutlmcharR(data) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/answersheets/' + data).subscribe
        (rs => {
          var answersheets = rs.json();
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
  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    var check = true;
    this.answers.forEach(element => {
      if (element.questionId == this.DataquestionData.id) {
        element.selectedOptionId = this.OptionsData.id;
        check = false;
      }
    });
    if (check) {
      if (this.DataquestionData.questionData == "answers") {
        if (this.selectedOptionId = "") {
          alert('Trường này không được để chống');
        } else
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
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  Putanswersheetmchatr() {
    var body = {
      "answers": this.answers
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.Data, body).subscribe
        (rs => {
          this.service.message("Lưu thành công!");
          this.router.navigate(['/listhistory-mchat-r'])
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message("Có lỗi khi lưu bài làm!");
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
    var body = {
      "answers": this.answers,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.Data, body).subscribe
        (rs => {
          var body1 = {
            "isCompleted": true
          }
          this.service.PutAPImachartRsatus(this.service.getHost() + 'mchatr/answersheets/' + this.Data + '/status', body1).subscribe(
            (rs1 => {
            }));
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message("Lưu thành công!");
          let navigationExtras: NavigationExtras = {
            queryParams: {
              createdId: this.Data,
              pageKQ: "/listhistory-mchat-r",
            }
          };
          this.router.navigate(['/ketquamchatr'], navigationExtras);
        }, error => {
          this.service.message("Có lỗi khi lưu bài làm!");
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
    txt.innerHTML = html
    return txt.value;
  }

  checkModal = true;
  async backPage() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalController.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          this.router.navigate(['/listhistory-mchat-r'])
        }
      });
      return await myModal.present();
    }
  }
  BackQuestion() {
    var index = parseInt(this.Dataquestion.index) - 2;
    this.Dataquestion = this.getlistquestion[index];
  }
  KETQUA() {
    if (this.answers.length == this.getlistquestion.length) {
      this.Putanswersheetmchatr();
      let navigationExtras: NavigationExtras = {
        queryParams:
        {
          createdId: this.Data,
          pageKQ: '/listhistory-mchat-r',
        }
      };
      this.router.navigate(['/ketquamchatr'], navigationExtras);
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
