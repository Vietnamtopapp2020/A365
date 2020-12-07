import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup5',
  templateUrl: './followup5.page.html',
  styleUrls: ['./followup5.page.scss'],
})
export class Followup5Page implements OnInit {
  passGroupQuestions = [
    ['Nhìn vào bàn tay?', v4()],
    ['Chuyển động ngón tay khi chơi trò ú tìm?', v4()],
  ].map(x => ({
    _id: x[1],
    code: x[1],
    content: x[0],
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: x[1],
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: x[1],
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }))
  failGroupQuestions = [
    ['Ngọ nguậy ngón tay gần mắt của trẻ?', v4()],
    ['Giữ bàn tay của trẻ và để gần mắt của trẻ?', v4()],
    ['Giữ tay của mình ở cạnh bên mắt?', v4()],
    ['Vỗ tay ở gần mặt của trẻ?', v4()],
  ].map(x => ({
    _id: x[1],
    code: x[1],
    content: x[0],
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: x[1],
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: x[1],
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }))
  idfrequency = v4();
  frequencyQuestion = {
    _id: this.idfrequency,
    code: this.idfrequency,
    content: 'Trẻ có nhìn vào bàn tay, chuyển động ngón tay khi chơi trò ú tìm,ngọ nguậy ngón tay gần mắt của trẻ, giữ bán tay của trẻ và để gần mắt trẻ, vỗ tay ở gần mặt của trẻ hơn 2 lần một tuần không?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.idfrequency,
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.idfrequency,
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 5
  data = null;
  nextBtnDisabled = true;
  currentDepthFrequency = false;

  constructor(
    public router: Router,
    private navCtrl: NavController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public platform: Platform,
  ) {
    this.service.Page = "followup";
    this.data = this.router.getCurrentNavigation().extras.queryParams;

  }
  ngOnInit() {
  }
  ReplypassGroup(question, Reply) {
    question.selected = Reply;
    this.nextBtnDisabled = false;
    this.passGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
      }
    });
    for (var i = 0; i < this.failGroupQuestions.length; i++) {
      if (this.failGroupQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
      else {
        if (this.failGroupQuestions[i].selected == true) {
          this.currentDepthFrequency = true;
          break;
        }
      }
    }
    if (this.currentDepthFrequency) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  ReplyfailGroup(question, Reply) {
    question.selected = Reply;
    this.nextBtnDisabled = false;
    this.currentDepthFrequency = false;
    this.passGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
      }
    });
    for (var i = 0; i < this.failGroupQuestions.length; i++) {
      if (this.failGroupQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
      else {
        if (this.failGroupQuestions[i].selected == true) {
          this.currentDepthFrequency = true;
          break;
        }
      }
    }


    if (this.currentDepthFrequency) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  ReplyfrequencyQuestion(question, Reply) {
    question.selected = Reply;
    // this.currentDepthFrequency = false;
    this.nextBtnDisabled = false;
    this.passGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
      }
    });
    for (var i = 0; i < this.failGroupQuestions.length; i++) {
      if (this.failGroupQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
      else {
        if (this.failGroupQuestions[i].selected == true) {
          this.currentDepthFrequency = true;
          break;
        }
      }
    }
    if (this.currentDepthFrequency) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  next() {
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.currentDepthFrequency) {
        if (this.frequencyQuestion.selected == false) {
          score = 0;
        }
      }
      else {
        var checkpassGroup = false;
        this.passGroupQuestions.forEach(element => {
          if (element.selected == true) {
            checkpassGroup = true;
          }
        });
        if (checkpassGroup) {
          score = 0;
        }
      }
      body = {
        "position": this.QUESTION_NUMBER,
        "score": score,
        "done": this.data.done
      }
      this.service.PutAPImachartRsatus(this.service.getHost() + 'mchatr/answersheets/' + this.data.id + '/followup', body).subscribe(
        (rs => {
                      if(this.service.CheckLoading){
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          var result = rs.json();
        }), error => {
                      if(this.service.CheckLoading){
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
        })
      this.service.BackDataFollow = {
        index: this.QUESTION_NUMBER,
        serial: this.data.serial
      };
      this.navCtrl.pop();
    }
    else {
      this.service.message("Vui lòng trả lời hết các câu hỏi!")
    }
  }
}
