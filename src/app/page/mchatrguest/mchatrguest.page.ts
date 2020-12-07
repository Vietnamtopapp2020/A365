import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-mchatrguest',
  templateUrl: './mchatrguest.page.html',
  styleUrls: ['./mchatrguest.page.scss'],
})
export class MchatrguestPage implements OnInit {
  [x: string]: any;
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
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public menuCtrl: MenuController,
    public netWork: Network
  ) {
    this.service.Page = "postTestTraiNghiem";
    this.service.backPage = "/register";
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.createdId = this.Data.answersheetId;
    this.Getquestionmchatr();
  }

  ngOnInit() {
  }
  Getquestionmchatr() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + 'mchatr/guest/answersheets/' + this.Data.answersheetId + '?token=' + this.Data.token).subscribe
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
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'mchatr/guest/answersheets/' + this.Data.answersheetId + '?token=' + this.Data.token, body).subscribe
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
  Resultpost() {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    if (this.answers.length == this.getlistquestion.length) {
      this.Putanswersheetmchatr();
      let navigationExtras: NavigationExtras = {
        queryParams: {
          answers: this.answers,
          id: this.Data.answersheetId,
          profileId: this.Data.profileId,
          token: this.Data.token,
          isCompleted: true,
          createdId: this.createdId
        },
      };
      this.router.navigate(['/profileanswesguestmchatr'], navigationExtras);
    }
    else {
      this.service.message("Vui lòng trả lời hết câu hỏi!")
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
  // chuyển câu tiếp

  NextQuestion() {
    var index = this.Dataquestion.index;
    if (index != this.getlistquestion.length.toString()) {
      this.Dataquestion = this.getlistquestion[index];
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
  backpage() {
    this.router.navigate(['/register'])
  }

}
