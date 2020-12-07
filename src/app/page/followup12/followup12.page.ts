import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup12',
  templateUrl: './followup12.page.html',
  styleUrls: ['./followup12.page.scss'],
})
export class Followup12Page implements OnInit {
  firstDepthQuestions = [
    ['Máy giặt không?', v4()],
    ['Trẻ em đang khóc không?', v4()],
    ['Máy hút bụi không?', v4()],
    ['Máy sấy tóc không?', v4()],
    ['Xe cộ không?', v4()],
    ['Trẻ em hò hét và gào thét?', v4()],
    ['Nhạc to không?', v4()],
    ['Điện thoại/chuông cửa reo?', v4()],
    ['Khu vực ồn ã như là siêu thị hoặc nhà hàng không?', v4()],
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
  passGroupQuestions = [
    ['Bình tĩnh che tai của mình không?', v4()],
    ['Nói với bạn là trẻ không thích tiếng ồn đó không?', v4()],
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
    ['La hét không?', v4()],
    ['Khóc không?', v4()],
    ['Che tai lại trong khi khó chịu?', v4()],
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
  frequency = v4();
  frequencyQuestion = {
    _id: this.frequency,
    code: this.frequency,
    content: 'Trẻ thường xuyên làm giống nhóm ví dụ nào?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.frequency,
        content: 'Bình tĩnh che tai của mình, Nói với bạn là trẻ không thích tiếng ồn đó',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.frequency,
        content: 'La hét, Khóc, Che tai lại trong khi khó chịu',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 12

  data = null;
  nextBtnDisabled = true;
  passGroupQuestionsCheck = false;
  frequencyQuestionCheck = false;
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
    var firstCheck = 0;
    for (var i = 0; i < this.firstDepthQuestions.length; i++) {
      if (this.firstDepthQuestions[i].selected == true) {
        firstCheck = firstCheck + 1;
      }
    }
    if (firstCheck >= 2) {
      this.passGroupQuestionsCheck = true;
    }
    else {
      this.passGroupQuestionsCheck = false;
      this.frequencyQuestionCheck = false;
      this.passGroupQuestions.forEach(element => {
        element.selected = null;
      });
      this.failGroupQuestions.forEach(element => {
        element.selected = null;
      });
    }
    if (this.passGroupQuestionsCheck) {
      var checkfirstDepth = true;
      for (var i = 0; i < this.failGroupQuestions.length; i++) {
        if (this.failGroupQuestions[i].selected == true) {
          this.frequencyQuestionCheck = true;
          checkfirstDepth = false;
          break;
        }
        if (checkfirstDepth && i == (this.failGroupQuestions.length - 1)) {
          this.frequencyQuestionCheck = false;
          this.frequencyQuestion.selected == null;
        }
      }
    }

  }
  next() {
    this.nextBtnDisabled = false;
    if (this.frequencyQuestionCheck == true) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
    if (this.nextBtnDisabled == false) {
      if (this.passGroupQuestionsCheck) {
        for (var i = 0; i < this.failGroupQuestions.length; i++) {
          if (this.failGroupQuestions[i].selected == null) {
            this.nextBtnDisabled = true;
            break;
          }
        }
        if (this.nextBtnDisabled == false) {
          for (var i = 0; i < this.passGroupQuestions.length; i++) {
            if (this.passGroupQuestions[i].selected == null) {
              this.nextBtnDisabled = true;
              break;
            }
          }
        }
      }
    }
    if (this.nextBtnDisabled == false) {
      for (var i = 0; i < this.firstDepthQuestions.length; i++) {
        if (this.firstDepthQuestions[i].selected == null) {
          this.nextBtnDisabled = true;
          break;
        }
      }
    }
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.frequencyQuestionCheck == true) {
        if (this.frequencyQuestion.selected) {
          score = 0;
        }
      }
      else {
        if (this.passGroupQuestionsCheck) {
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
        else {
          var checkFirst = 0;
          for (var i = 0; i < this.firstDepthQuestions.length; i++) {
            if (this.firstDepthQuestions[i].selected == true) {
              checkFirst = checkFirst + 1;
            }
          }
          if (checkFirst < 2) {
            score = 0;
          }
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
