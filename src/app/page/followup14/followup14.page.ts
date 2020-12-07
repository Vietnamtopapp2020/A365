import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup14',
  templateUrl: './followup14.page.html',
  styleUrls: ['./followup14.page.scss'],
})
export class Followup14Page implements OnInit {
  firstDepthQuestions = [
    ['Khi bé cần gì đó?', v4()],
    ['Khi bạn đang chơi với bé?', v4()],
    ['Khi bạn cho bé ăn không?', v4()],
    ['Khi bạn thay tã cho bé ?', v4()],
    ['Khi bạn đọc truyện cho bé nghe?', v4()],
    ['Khi bạn nói chuyện với bé?', v4()],
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
  secondDepth = v4();
  secondDepthQuestion = {
    _id: this.secondDepth,
    code: this.secondDepth,
    content:
      'Hàng ngày, trẻ có nhìn vào mắt bạn không?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.secondDepth,
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.secondDepth,
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  thirdDepth = v4();
  thirdDepthQuestion = {
    _id: this.thirdDepth,
    code: this.thirdDepth,
    content:
      'Khi bạn và bé ở cùng nhau cả ngày, bé có nhìn vào mắt bạn ít nhất 5 lần không?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.thirdDepth,
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.thirdDepth,
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 14
  data = null;
  nextBtnDisabled = true;
  secondDepthQuestionCheck = false;
  thirdDepthQuestionCheck = false;
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
  QuestionReply(question, Reply) {
    question.selected = Reply;
    var countTrue = 0;
    this.firstDepthQuestions.forEach(element => {
      if (element.selected == true) {
        countTrue = countTrue + 1;
      }
    });
    if (countTrue == 1) {
      this.secondDepthQuestionCheck = true;
    }
    else {
      this.secondDepthQuestionCheck = false;
      this.thirdDepthQuestionCheck = false;
      this.secondDepthQuestion.selected = null;
      this.thirdDepthQuestion.selected = null;
    }
    if (this.secondDepthQuestionCheck) {
      if (this.secondDepthQuestion.selected) {
        this.thirdDepthQuestionCheck = true;
      }
    }
  }
  next() {
    this.nextBtnDisabled = false;
    if (this.thirdDepthQuestionCheck) {
      if (this.thirdDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
    else {
      if (this.secondDepthQuestionCheck) {
        if (this.secondDepthQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }
      else {
        this.firstDepthQuestions.forEach(element => {
          if (element.selected == null) {
            this.nextBtnDisabled = true;
          }
        });
      }
    }
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.thirdDepthQuestionCheck) {
        if (this.thirdDepthQuestion.selected) {
          score = 0;
        }
      }
      else {
        var countTrue = 0;
        this.firstDepthQuestions.forEach(element => {
          if (element.selected == true) {
            countTrue = countTrue + 1;
          }
        });
        if (countTrue > 1) {
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