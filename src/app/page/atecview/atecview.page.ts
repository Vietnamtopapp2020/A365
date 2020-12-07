import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { element } from 'protractor';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { from } from 'rxjs';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-atecview',
  templateUrl: './atecview.page.html',
  styleUrls: ['./atecview.page.scss'],
})
export class AtecviewPage implements OnInit {

  userDetails: any = [];
  questionsconten = [];
  Data: any;
  notifi = [{
    text: "Lưu thành công"
  }]
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
    NamePost: ""
  }
  createdId = "";
  DataquestionData = null;
  OptionsData = null;
  speechAnswers = [];
  sociabilityAnswers = [];
  sensoryCognitiveAwarenessAnswers = [];
  healthPhysicalBehaviorAnswers = [];



  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    public netWork: Network
  ) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "postTest";
    this.service.backPage = "/listhistory-atec";
    this.service.total = 0;
    this.service.ApiDeleteTest = "atec/answersheets/";
  }

  ngOnInit() {
    this.GetquestionATEC();
  }

  GetquestionATEC() {
    var body = {
      childId: this.Data.id
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionmchatR(this.service.getHost() + 'atec/answersheets', body).subscribe
        (rs => {
          var result = rs.json();
          this.createdId = result.createdId;
          this.service.PostTestId = this.createdId;
          this.service.postGet(this.service.getHost() + 'atec/answersheets/' + result.createdId).subscribe
            (rs1 => {
              var answersheets = rs1.json();
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
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
                this.service.CheckLoading = false;
              }
            }, error => {
              if (this.service.CheckLoading) {
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
                this.service.CheckLoading = false;
              }
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
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
      this.service.total = 1;
      this.service.backPage = "/listhistory-atec";
    }
    else {
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  ResultAtec(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
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
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  PutanswersheetATEC() {
    var body = {
      "isCompleted": false,
      "healthPhysicalBehaviorAnswers": this.healthPhysicalBehaviorAnswers,
      "sensoryCognitiveAwarenessAnswers": this.sensoryCognitiveAwarenessAnswers,
      "sociabilityAnswers": this.sociabilityAnswers,
      "speechAnswers": this.speechAnswers,

    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'atec/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.service.message(this.notifi[0].text);
          this.router.navigate(["/listhistory-atec"])
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
  PutanswersheetATEC1() {
    var body = {
      "isCompleted": true,
      "healthPhysicalBehaviorAnswers": this.healthPhysicalBehaviorAnswers,
      "sensoryCognitiveAwarenessAnswers": this.sensoryCognitiveAwarenessAnswers,
      "sociabilityAnswers": this.sociabilityAnswers,
      "speechAnswers": this.speechAnswers,

    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'atec/answersheets/' + this.createdId, body).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message(this.notifi[0].text);
          let navigationExtras: NavigationExtras = {
            queryParams: {
              createdId: this.createdId,
              pageKQ: "/nhatkycanthiep"
            }
          };
          this.router.navigate(['/ketqua-atec'], navigationExtras);
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
    var total = this.healthPhysicalBehaviorAnswers.length + this.sensoryCognitiveAwarenessAnswers.length + this.sociabilityAnswers.length + this.speechAnswers.length;
    if (total == this.getlistquestion.length) {
      this.PutanswersheetATEC1();
    }
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")

    }
  }
  checkModal = true;
  async backpage() {
    var mess = "";
    var total = this.healthPhysicalBehaviorAnswers.length + this.sensoryCognitiveAwarenessAnswers.length + this.sociabilityAnswers.length + this.speechAnswers.length;
    if (total == 0) {
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
          if (total == 0) {
            this.DeleteASQT();
            this.router.navigate(["/nhatkycanthiep"])
          }
          else {
            this.PutanswersheetATEC();
          }

        }
      });
      return await myModal.present();
    }
  }
  DeleteASQT() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'atec/answersheets/' + this.createdId).subscribe
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
