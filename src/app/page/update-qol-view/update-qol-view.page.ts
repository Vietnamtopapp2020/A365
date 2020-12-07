import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { element } from 'protractor';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-update-qol-view',
  templateUrl: './update-qol-view.page.html',
  styleUrls: ['./update-qol-view.page.scss'],
})
export class UpdateQolViewPage implements OnInit {

  qolDetails = [];
  Data: any;
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
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.service.Page = "";
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetResutlQOL(this.Data);
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
  BackQuestion() {
    var index = parseInt(this.Dataquestion.index) - 2;
    this.Dataquestion = this.getlistquestion[index];
  }
  resutl(Dataquestion, options) {
    this.OptionsData = options;
    this.DataquestionData = Dataquestion;
    this.DataquestionData.selectedOptionId = options.id;
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
  }
  Putanswerqol() {
    var checkdata = true;
    for (var i = 0; i < this.getlistquestion.length; i++) {
      if (this.getlistquestion[i].selectedOptionId == null || this.getlistquestion[i].selectedOptionId == "") {
        checkdata = false;
        break;
      }
    }
    var body = {
      "isCompleted": checkdata,
      "answers": this.answers,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'qol/answersheets/' + this.Data, body).subscribe
        (rs => {
          var answersheets = rs.json();
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

    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  backpage() {
    this.router.navigate(['/ketquaqol']);
  }
  KETQUA() {
    this.Putanswerqol();

    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.Data
      }
    };
    this.router.navigate(['/ketquaqol'], navigationExtras);

  }
  ParseIntData(Number) {
    return parseInt(Number);
  }
}
