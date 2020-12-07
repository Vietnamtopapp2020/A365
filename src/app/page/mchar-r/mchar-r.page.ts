import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-mchar-r',
  templateUrl: './mchar-r.page.html',
  styleUrls: ['./mchar-r.page.scss'],
})
export class McharRPage implements OnInit {

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
  notifi = [{
    text: 'Lưu thành công'
  }]
  notidk = [{
    text: "Trẻ không đủ điều kiện làm bài test"
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
  selectedOptionId: string;
  dataPageKQ: any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.data = this.router.getCurrentNavigation().extras.queryParams.ObjectPage;
    this.dataPageKQ = this.router.getCurrentNavigation().extras.queryParams.pageKQ;
    this.service.Page = "postTest";
    this.service.backPage = this.dataPageKQ;
    this.service.total = 0;
    this.service.ApiDeleteTest = "mchatr/answersheets/";
    this.Getquestionmchatr();
  }
  ngOnInit() {

  }

  Getquestionmchatr() {
    if (this.data.isEligibleForMchatr == true) {
      var body = {
        childId: this.data.id
      };
    }
    else {
      this.service.message(this.notidk[0].text);
    }
    // Call API post câu hỏi trong mchartR
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionmchatR(this.service.getHost() + 'mchatr/answersheets', body).subscribe
        (rs => {
          var result = rs.json();
          this.createdId = result.createdId;
          this.service.PostTestId = this.createdId;
          this.service.GetanswersheetsMchartR(this.service.getHost() + 'mchatr/answersheets/' + result.createdId).subscribe
            (rs1 => {
              var answersheets = rs1.json();
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
  Putanswersheetmchatr() {
    var body = {
      "answers": this.answers,
      "isCompleted": false,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.router.navigate(["/listhistory-mchat-r"]);
          this.service.message(this.notifi[0].text);
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
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    var checkdata = true;
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body = {
      "answers": this.answers
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.createdId, body).subscribe
        (rs => {
          var body1 = {
            "isCompleted": checkdata
          }
          this.service.PutAPImachartRsatus(this.service.getHost() + 'mchatr/answersheets/' + this.createdId + '/status', body1).subscribe(
            (rs1 => {
              if (this.service.CheckLoading) {
                this.service.CheckLoading = false;
                this.toast.DismissToast();
              };
              this.service.message(this.notifi[0].text);
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  createdId: this.createdId,
                  pageKQ: this.dataPageKQ,
                }
              };
              this.router.navigate(['/ketquamchatr'], navigationExtras);
              this.service.postPushNotification(this.service.getHost() + 'mchatr/answersheets/' + this.createdId).subscribe(rs2 => {
              })
            }), error => {
              if (this.service.CheckLoading) {
                this.service.CheckLoading = false;
                this.toast.DismissToast();
              };
              this.service.message("Có lỗi khi lưu bài làm!");
            }
          )
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
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  // lấy id câu hỏi,câu trả lời

  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    this.toast.showLoadingNext("");
    setTimeout(() => {
      this.NextQuestion();
    }, 200);


  }
  // chuyển câu tiếp

  NextQuestion() {
    var index = this.Dataquestion.index;
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


  GetResutlmcharR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/answersheets/' + this.createdId).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.Dataquestion = this.getlistquestion[0];
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
  KETQUA() {
    if (this.answers.length == this.getlistquestion.length) {
      this.Putanswersheetmchatr1();
    }
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
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
            this.DeleteMchatr();
          }
          this.router.navigate([this.dataPageKQ])
        }
      });
      return await myModal.present();
    }
  }
  DeleteMchatr() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'mchatr/answersheets/' + this.createdId).subscribe
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

