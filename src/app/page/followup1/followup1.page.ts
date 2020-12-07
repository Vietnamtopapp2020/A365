import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followup1',
  templateUrl: './followup1.page.html',
  styleUrls: ['./followup1.page.scss'],
})
export class Followup1Page implements OnInit {
  nextBtnDisabled = true;
  currentDepth = 1;
  currentDepthFrequency = false;
  passGroupQuestions = [
    ['Nhìn vào đồ vật', v4()],
    ['Chỉ vào đồ vật', v4()],
    ['Nhìn và nhận xét về đồ vật', v4()],
    ['Nhìn nếu cha/ mẹ chỉ và nói "nhìn kìa!"', v4()],
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
    ['Không phản ứng gì/ lờ cha/ mẹ đi', v4()],
    ['Nhìn xung quanh phòng một cách ngẫu nhiên', v4()],
    ['Nhìn vào ngón tay của cha/ mẹ', v4()]
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
    content: 'Hành động nào trẻ thực hiện thường xuyên hơn?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.idfrequency,
        content: 'Nhìn vào đồ vật, Chỉ vào đồ vật, Nhìn và nhận xét về đồ vật, Nhìn nếu cha/ mẹ chỉ và nói "nhìn kìa!"',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.idfrequency,
        content: 'Không phản ứng gì/ lờ cha/ mẹ đi, Nhìn xung quanh phòng một cách ngẫu nhiên, Nhìn vào ngón tay của cha/ mẹ',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 1;
  data = null;
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
  ReplyfailGroup(question, Reply) {
    this.nextBtnDisabled = false;
    this.currentDepthFrequency = true;
    question.selected = Reply;
    this.passGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
      else {
        if (element.selected == false) {
          this.currentDepthFrequency = false;
        }
      }
    });
    this.failGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
      else {
        if (element.selected == false) {
          this.currentDepthFrequency = false;
        }
      }
    });
    if (this.currentDepthFrequency) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  ReplyfrequencyQuestion(question, Reply) {
    this.nextBtnDisabled = false;
    question.selected = Reply;
    this.passGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
    });
    this.failGroupQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
      }
    });
    if (this.nextBtnDisabled) {
      var checkReply = false;
      this.passGroupQuestions.forEach(element => {
        if (element.selected == false) {
          checkReply = true;
        }
      });
      this.failGroupQuestions.forEach(element => {
        if (element.selected == false) {
          checkReply = true;
        }
      });
      if (checkReply) {
        if (this.frequencyQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }
    }
  }
  next() {
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.currentDepthFrequency) {
        if (this.frequencyQuestion.selected) {
          score = 0;
        }
      }
      else {
        var checkpassGroup = true;
        this.passGroupQuestions.forEach(element => {
          if (element.selected == false) {
            checkpassGroup = false;
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
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var result = rs.json();
        }), error => {
          if (this.service.CheckLoading) {
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
