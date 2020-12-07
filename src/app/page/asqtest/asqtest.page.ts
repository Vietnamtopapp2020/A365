import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { TextSearchColorSettings } from '@syncfusion/ej2-angular-pdfviewer';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-asqtest',
  templateUrl: './asqtest.page.html',
  styleUrls: ['./asqtest.page.scss'],
})
export class AsqtestPage implements OnInit {
  checkiscompleted: boolean;
  checkquestionsID: false;
  getlistquestion = [];
  ResutlASQ = [];
  ResutlASQ1 = [];
  skip = 0;
  take = 10;
  sort = '';
  query = '';
  txtname = '';
  id: any;
  notifi = [{
    text: "Lưu thành công"
  }]
  notidkasq = [{
    text: "Hãy hoàn thành bài theo dõi!"
  }]
  Data: any;
  data1: any
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
    ],
    questionData: '',
    selectedOptionId: '',
    sliderImages: [],
    type: "",
    updatedAt: '',
    NamePost: '',
    customInput: '',
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
  checkdata = true;
  namepost: any;
  bocauhoi: any;
  listposst: any;
  a: any;
  dataBackPage: any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    public netWork: Network
  ) {

    this.Data = this.router.getCurrentNavigation().extras.queryParams.ObjectPage;
    this.dataBackPage = this.router.getCurrentNavigation().extras.queryParams.pageKQ;
    this.service.Page = "postTest";
    this.service.backPage = this.dataBackPage;
    this.service.total = 0;
    this.service.ApiDeleteTest = "asq/answersheets/";

    this.GetquestionASQ();
  }
  ngOnInit() {
  }
  checkModal = true;
  async backpage() {
    var mess = "";
    var total = this.communicationAnswers.length + this.grossMotorAnswers.length + this.fineMotorAnswers.length + this.problemSolvingAnswers.length + this.personalSocialAnswers.length + this.overallAnswers.length;
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
          }
          this.router.navigate([this.dataBackPage])
        }
      });
      return await myModal.present();
    }
  }
  checkanswer() {
    this.checkquestionsID != this.checkquestionsID;
  }
  GetquestionASQ() {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    var body = {
      childId: this.Data.id
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionmchatR(this.service.getHost() + 'asq/answersheets', body).subscribe
        (rs => {
          var result = rs.json();
          this.createdId = result.createdId;
          this.service.PostTestId = this.createdId;
          this.service.GetanswersheetsMchartR(this.service.getHost() + 'asq/answersheets/' + result.createdId).subscribe
            (rs1 => {

              var answersheets = rs1.json();
              this.bocauhoi = answersheets.questionnare.name;

              var index = 0;
              answersheets.communicationAnswers.forEach(element => {
                index++;
                this.inputData("communicationAnswers", element, index, "Giao tiếp");
                // this.namepost ='Giao tiếp';
              });
              answersheets.fineMotorAnswers.forEach(element => {
                index++;
                this.inputData("fineMotorAnswers", element, index, 'Vận động tinh');
                // this.namepost ='Vận động tinh';
              });
              answersheets.grossMotorAnswers.forEach(element => {
                index++;
                this.inputData("grossMotorAnswers", element, index, 'Vận động thô');
                // this.namepost ='Vận động thô';
              });
              answersheets.personalSocialAnswers.forEach(element => {
                index++;
                this.inputData("personalSocialAnswers", element, index, 'Cá nhân xã hội');
                // this.namepost ='Xã hội';
              });
              answersheets.problemSolvingAnswers.forEach(element => {
                index++;
                this.inputData("problemSolvingAnswers", element, index, 'Giải quyết vấn đề');
                // this.namepost ='Giải quyết vấn đề';
              });
              answersheets.overallAnswers.forEach(element => {
                index++;
                this.inputData("overallAnswers", element, index, 'Câu hỏi chung');
                // this.namepost ='Câu hỏi chung';
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
  PutanswersheetASQ() {
    var body = {
      "isCompleted": false,
      "communicationAnswers": this.communicationAnswers,
      "grossMotorAnswers": this.grossMotorAnswers,
      "fineMotorAnswers": this.fineMotorAnswers,
      "problemSolvingAnswers": this.problemSolvingAnswers,
      "personalSocialAnswers": this.personalSocialAnswers,
      "overallAnswers": this.overallAnswers,
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'asq/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.listposst = rs.json();
          this.service.message(this.notifi[0].text);
          this.router.navigate(['/listhistory-asq'])
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
  PutanswersheetASQ1() {
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        this.checkdata = false;
        break;
      }
    }
    var body = {
      "isCompleted": this.checkdata,
      "communicationAnswers": this.communicationAnswers,
      "grossMotorAnswers": this.grossMotorAnswers,
      "fineMotorAnswers": this.fineMotorAnswers,
      "problemSolvingAnswers": this.problemSolvingAnswers,
      "personalSocialAnswers": this.personalSocialAnswers,
      "overallAnswers": this.overallAnswers,
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'asq/answersheets/' + this.createdId, body).subscribe
        (rs => {
          this.listposst = rs.json();
          this.service.message(this.notifi[0].text);
          if (this.service.Role == 2) {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                createdId: this.createdId,
                childId: this.Data.id,
                getlistquestion: this.getlistquestion,
                communicationAnswers: this.communicationAnswers,
                grossMotorAnswers: this.grossMotorAnswers,
                fineMotorAnswers: this.fineMotorAnswers,
                problemSolvingAnswers: this.problemSolvingAnswers,
                personalSocialAnswers: this.personalSocialAnswers,
                overallAnswers: this.overallAnswers,
                page: "/asqtest",
                pageKQ: this.dataBackPage
              }
            };
            this.router.navigate(['/administrative-regions-asq'], navigationExtras);
          }
          else {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                createdId: this.createdId,
                pageKQ: this.dataBackPage
              }
            };
            this.router.navigate(['/ketquaasq'], navigationExtras);
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
  GetResutlASQ() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'asq/answersheets/' + this.createdId).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.a = rs.json();
          this.checkiscompleted = this.a.isCompleted;
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
  inputData(questionData, data, index, name) {
    var options = [];
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
      createdId: this.createdId,
      childId: this.Data._id,
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
      NamePost: name,
      customInput: "",

    });
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  BackQuestion() {
    if (parseInt(this.Dataquestion.index) - 2 >= 0) {
      var index = parseInt(this.Dataquestion.index) - 2;
      this.Dataquestion = this.getlistquestion[index];
      this.DataquestionData = this.getlistquestion[index];
      this.DataquestionData.options.forEach(element => {
        if (this.DataquestionData.selectedOptionId == element.id) {
          this.OptionsData = element;
        }
      });
    }
  }
  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
    this.DataquestionData.selectedOptionId = options.id;
    this.getlistquestion[this.DataquestionData.index - 1] = this.DataquestionData;
    if (this.Dataquestion.options.length != 2) {
      if (this.DataquestionData != null) {
        if (this.DataquestionData.questionData == "communicationAnswers") {
          var check = true;
          this.communicationAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.communicationAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "grossMotorAnswers") {
          var check = true;
          this.grossMotorAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              element.questionId = this.DataquestionData.id;
              element.selectedOptionId = this.OptionsData.id;
              element.customInput = this.DataquestionData.customInput;
            }
          });
          if (check) {
            this.grossMotorAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "fineMotorAnswers") {
          var check = true;
          this.fineMotorAnswers.forEach(element => {

            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.fineMotorAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "problemSolvingAnswers") {
          var check = true;
          this.problemSolvingAnswers.forEach(element => {

            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.problemSolvingAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "personalSocialAnswers") {
          var check = true;
          this.personalSocialAnswers.forEach(element => {

            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.personalSocialAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "overallAnswers") {
          var check = true;
          this.overallAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              element.questionId = this.DataquestionData.id;
              element.selectedOptionId = this.OptionsData.id;
              element.customInput = this.DataquestionData.customInput;
            }
          });
          if (check) {
            this.overallAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        this.toast.showLoadingNext("");
        setTimeout(() => {
          this.NextQuestion();
        }, 200);
      }
      else {
        this.service.message("Vui lòng chọn đáp án!")
      }
    }
    else {
      if (options.point == 1) {
        if (this.DataquestionData.questionData == "communicationAnswers") {
          var check = true;
          this.communicationAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.communicationAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "grossMotorAnswers") {
          var check = true;
          this.grossMotorAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              element.questionId = this.DataquestionData.id;
              element.selectedOptionId = this.OptionsData.id;
              element.customInput = this.DataquestionData.customInput;
            }
          });
          if (check) {
            this.grossMotorAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "fineMotorAnswers") {
          var check = true;
          this.fineMotorAnswers.forEach(element => {

            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.fineMotorAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "problemSolvingAnswers") {
          var check = true;
          this.problemSolvingAnswers.forEach(element => {

            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.problemSolvingAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "personalSocialAnswers") {
          var check = true;
          this.personalSocialAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              if (element.questionId == this.DataquestionData.id) {
                check = false;
                element.questionId = this.DataquestionData.id;
                element.selectedOptionId = this.OptionsData.id;
                element.customInput = this.DataquestionData.customInput;
              }
            }
          });
          if (check) {
            this.personalSocialAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        if (this.DataquestionData.questionData == "overallAnswers") {
          var check = true;
          this.overallAnswers.forEach(element => {
            if (element.questionId == this.DataquestionData.id) {
              check = false;
              element.questionId = this.DataquestionData.id;
              element.selectedOptionId = this.OptionsData.id;
              element.customInput = this.DataquestionData.customInput;
            }
          });
          if (check) {
            this.overallAnswers.push({
              questionId: this.DataquestionData.id,
              selectedOptionId: this.OptionsData.id,
              customInput: this.DataquestionData.customInput
            });
          }
        }
        this.toast.showLoadingNext("");
        setTimeout(() => {
          this.NextQuestion();
        }, 200);
      }
    }
  }
  NextQuestion() {
    this.DataquestionData = null;
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
      if (this.Dataquestion.selectedOptionId != undefined) {
        this.DataquestionData = this.getlistquestion[index];
        this.DataquestionData.options.forEach(element => {
          if (this.DataquestionData.selectedOptionId == element.id) {
            this.OptionsData = element;
          }
        });
      }
      this.service.total = 1;
    }
    else {
      this.service.message("Bạn đã trả lời xong bộ câu hỏi");
    }
  }
  NextQuestion1() {
    if (this.DataquestionData != null) {
      if (this.DataquestionData.questionData == "overallAnswers") {
        var check = true;
        this.overallAnswers.forEach(element => {
          if (element.questionId == this.DataquestionData.id) {
            check = false;
            element.questionId = this.DataquestionData.id;
            element.selectedOptionId = this.OptionsData.id;
            element.customInput = this.DataquestionData.customInput;
          }
        });
        if (check) {
          this.overallAnswers.push({
            questionId: this.DataquestionData.id,
            selectedOptionId: this.OptionsData.id,
            customInput: this.DataquestionData.customInput
          });
        }
      }
      this.DataquestionData = null;
      var index = this.Dataquestion.index;
      if (index != this.getlistquestion.length.toString()) {
        this.Dataquestion = this.getlistquestion[index];
        if (this.Dataquestion.selectedOptionId != undefined) {
          this.DataquestionData = this.getlistquestion[index];
          this.DataquestionData.options.forEach(element => {
            if (this.DataquestionData.selectedOptionId == element.id) {
              this.OptionsData = element;
            }
          });
        }
      }
      else {
        this.service.message("Bạn đã trả lời xong bộ câu hỏi");
      }
    }
    else {
      this.service.message("Vui lòng chọn đáp án!")
    }


  }
  KETQUA() {
    var total = this.communicationAnswers.length + this.grossMotorAnswers.length + this.fineMotorAnswers.length + this.problemSolvingAnswers.length + this.personalSocialAnswers.length + this.overallAnswers.length;
    if (total == this.getlistquestion.length) {
      this.PutanswersheetASQ1();
      this.GetResutlASQ()
    } else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
    }
  }
  DeleteASQT() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'asq/answersheets/' + this.createdId).subscribe
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
