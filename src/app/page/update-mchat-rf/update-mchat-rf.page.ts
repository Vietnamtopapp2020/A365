import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-update-mchat-rf',
  templateUrl: './update-mchat-rf.page.html',
  styleUrls: ['./update-mchat-rf.page.scss'],
})
export class UpdateMchatRFPage implements OnInit {
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
  notifi = [{
    text: 'Lưu thành công'
  }]
  OptionsData = null;
  DataquestionData = null;
  txtReply = "";
  createdId = "";
  Resutlmchatrf = null;
  positons = null;
  answersFollowup = [];
  requireFollowup = true;
  child: any;
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
    this.service.backPage = "/listhistory-mchat-rf";
    this.service.total = 1;
    this.service.PostTestId = this.Data.createdId;
    this.service.ApiDeleteTest = "mchatr/answersheets/";
    this.GetResutlmcharRF();
  }

  ngOnInit() {
  }
  GetResutlmcharRF() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId).subscribe
        (rs => {
          var answersheets = rs.json();
          var index = 0;
          answersheets.answers.forEach(element => {
            index++;
            this.inputData("answers", element, index);
          });
          this.child = answersheets.child;
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
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  Putanswersheetmchatrf() {
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
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId, body).subscribe
        (rs => {
          this.service.message(this.notifi[0].text);
          this.router.navigate(['/listhistory-mchat-rf']);
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
    txt.innerHTML = html
    return txt.value;
  }
  // lấy id câu hỏi,câu trả lời
  BackQuestion() {
    var index = parseInt(this.Dataquestion.index) - 2;
    this.Dataquestion = this.getlistquestion[index];
  }
  checkModal = true;
  async backpage() {
    var mess = "";
    mess = "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
    const myModal = await this.modalController.create({
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
          this.router.navigate(['/listhistory-mchat-rf'])
        }
      });
      return await myModal.present();
    }
  }
  PutanswersheetmchatrfFollw() {
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
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId, body).subscribe
        (rs => {

          var result = rs.json();
          this.requireFollowup = result.requireFollowup;
          if (this.requireFollowup) {
            this.service.postPushNotification(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId).subscribe(rs2 => {
              this.service.message(this.notifi[0].text);
              var result2 = rs2.json();
              this.answersFollowup = result2.answers;
              var countFollowp = 0;
              this.answersFollowup.forEach(element => {
                if (element.score == 1) {
                  countFollowp++;
                }
              });
              var checkFollw = false;
              for (var i = 0; i < this.answersFollowup.length; i++) {
                if (this.answersFollowup[i].score == 1 && this.answers.length == this.getlistquestion.length) {
                  this.OpenFollwop(this.answersFollowup[i], countFollowp, 1);
                  checkFollw = true;
                  break;
                }
              }
              if (!checkFollw) {
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    createdId: this.Data.createdId,
                    childId: this.data.id,
                    page: "/update-mchat-rf",
                    pageKQ: this.data.pageKQ
                  }
                };
                this.router.navigate(['/administrative-regions-mchatrf'], navigationExtras);
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
          }
          else {
            this.service.message(this.notifi[0].text);
          }
        }, error => {
          this.toast.showToast;
        });
      var body1 = {
        "isCompleted": checkdata
      }
      this.service.PutAPImachartRsatus(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId + '/status', body1).subscribe(
        (rs1 => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        }), error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        })

    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  Putanswersheetmchatrf1() {
    if (this.answers.length == this.getlistquestion.length) {
      var checkdata = true;
      for (var i = 0; i < this.getlistquestion.length; i++) {
        if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
          checkdata = false;
          break;
        }
      }
      var body = {
        "answers": this.answers,
        "isCompleted": checkdata
      }
      if (this.netWork.type.toUpperCase() != "NONE") {
        this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId, body).subscribe
          (rs => {
            var result = rs.json();
            this.requireFollowup = result.requireFollowup;
            if (this.requireFollowup) {
              this.service.postPushNotification(this.service.getHost() + 'mchatr/answersheets/' + this.Data.createdId).subscribe(rs2 => {
                this.service.message(this.notifi[0].text);
                var result2 = rs2.json();
                this.service.ListFollowup = result2.answers;
                this.service.countFollowp = 0;
                this.service.ListFollowup.forEach(element => {
                  if (element.score == 1) {
                    this.service.countFollowp++;
                  }
                });
                console.log(JSON.stringify(this.answersFollowup));
                for (var i = 0; i < this.service.ListFollowup.length; i++) {
                  if (this.service.ListFollowup[i].score == 1 && this.answers.length == this.getlistquestion.length) {
                    this.OpenFollwop(this.service.ListFollowup[i], this.service.countFollowp, 1);
                    break;
                  }
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
                this.service.message("Có lỗi khi lưu bài làm!");
              });
            }
            else {
              this.KETQUA();
              this.service.message(this.notifi[0].text);
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
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
    }
  }
  ionViewDidEnter() {

    if (this.service.ListFollowup.length != 0) {
      var checkPop = true;
      for (var i = this.service.BackDataFollow.index; i < this.service.ListFollowup.length; i++) {
        if (this.service.ListFollowup[i].score == 1) {
          checkPop = false;
          var serial = this.service.BackDataFollow.serial + 1;
          this.OpenFollwop(this.service.ListFollowup[i], this.service.countFollowp, serial);
          break;
        }
      }
      if (checkPop == true) {
        this.KETQUA();
        this.service.ListFollowup = [];
        this.service.BackDataFollow = null;
        this.service.countFollowp = 0;
      }
    }
  }
  async OpenFollwop(followup, countFollowp, serial) {
    var done = false;
    if (countFollowp == serial) {
      done = true;
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        serial: serial,
        id: this.createdId,
        done: done
      }
    };
    switch (followup.question.code) {
      case "MCHAT-1":
        this.router.navigate(['/followup1'], navigationExtras);
        break;
      case "MCHAT-2":
        this.router.navigate(['/followup2'], navigationExtras);
        break;
      case "MCHAT-3":
        this.router.navigate(['/followup3'], navigationExtras);
        break;
      case "MCHAT-4":
        this.router.navigate(['/followup4'], navigationExtras);
        break;
      case "MCHAT-5":
        this.router.navigate(['/followup5'], navigationExtras);
        break;
      case "MCHAT-6":
        this.router.navigate(['/followup6'], navigationExtras);
        break;
      case "MCHAT-7":
        this.router.navigate(['/followup7'], navigationExtras);
        break;
      case "MCHAT-8":
        this.router.navigate(['/followup8'], navigationExtras);
        break;
      case "MCHAT-9":
        this.router.navigate(['/followup9'], navigationExtras);
        break;
      case "MCHAT-10":
        this.router.navigate(['/followup10'], navigationExtras);
        break;
      case "MCHAT-11":
        this.router.navigate(['/followup11'], navigationExtras);
        break;
      case "MCHAT-12":
        this.router.navigate(['/followup12'], navigationExtras);
        break;
      case "MCHAT-13":
        this.router.navigate(['/followup13'], navigationExtras);
        break;
      case "MCHAT-14":
        this.router.navigate(['/followup14'], navigationExtras);
        break;
      case "MCHAT-15":
        this.router.navigate(['/followup15'], navigationExtras);
        break;
      case "MCHAT-16":
        this.router.navigate(['/followup16'], navigationExtras);
        break;
      case "MCHAT-17":
        this.router.navigate(['/followup17'], navigationExtras);
        break;
      case "MCHAT-18":
        this.router.navigate(['/followup18'], navigationExtras);
        break;
      case "MCHAT-19":
        this.router.navigate(['/followup19'], navigationExtras);
        break;
      case "MCHAT-20":
        this.router.navigate(['/followup20'], navigationExtras);
        break;
    }
  }
  KETQUA() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.Data.createdId,
        childId: this.child,
        page: "/update-mchat-rf",
        pageKQ: "/listhistory-mchat-rf"
      }
    };
    this.router.navigate(['/administrative-regions-mchatrf'], navigationExtras);
  }
  NextData() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
    }
  }
}
