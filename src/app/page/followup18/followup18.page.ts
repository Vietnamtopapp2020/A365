import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup18',
  templateUrl: './followup18.page.html',
  styleUrls: ['./followup18.page.scss'],
})
export class Followup18Page implements OnInit {
  firstDepth = v4();
  firstDepthQuestion = {
    _id: this.firstDepth,
    code: this.firstDepth,
    content: 'Khi có gợi ý cho trẻ, trẻ có làm theo yêu cầu không? Ví dụ như khi bạn mặc quần áo để đi chơi, bạn bảo bé hãy đi lấy giày của mình, con có hiểu không?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.firstDepth,
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.firstDepth,
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  secondDepth = v4();
  secondDepthQuestion = {
    _id: this.secondDepth,
    code: this.secondDepth,
    content:
      'Nếu đến bữa cơm tối và thức ăn đã dọn lên bàn, và bạn bảo bé ngồi xuống, bé có ngồi xuống bàn ăn không?',
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
  thirdDepthQuestions = [
    ['Khi bạn nói, "Cho mẹ xem giày của con" mà không chỉ vào giày, không có điệu bộ hoặc đưa ra gợi ý, bé có chỉ vào giày của bé không?', v4()],
    ['Nếu bạn nói "Lấy cho mẹ cái chăn" hoặc nhờ lấy vài đồ khác mà không chỉ, không có điệu bộ hoặc không đưa ra gợi ý, trẻ có lấy cho bạn không?', v4()],
    ['Nếu bạn nói "Để quyển sách lên ghế" mà không chỉ, không tỏ điệu bộ, hoặc không đưa gợi ý, trẻ có để quyển sách lên ghế không?', v4()],
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
  QUESTION_NUMBER = 18
  data = null;
  nextBtnDisabled = true;
  secondDepthQuestionCheck = false;
  thirdDepthQuestionsCheck = false;
  fourDepthQuestionsCheck = false;
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

  QuestionReplyfirstDepth(question, Reply) {

    question.selected = Reply;
    this.thirdDepthQuestionsCheck = false;
    if (this.firstDepthQuestion.selected) {
      this.thirdDepthQuestions.forEach(element => {
        element.selected = null;
      });
      this.fourDepthQuestionsCheck = true;
      this.secondDepthQuestionCheck = false;
      this.secondDepthQuestion.selected = null
    }
    else {
      this.thirdDepthQuestionsCheck = false;
      this.secondDepthQuestionCheck = true;
      this.fourDepthQuestionsCheck = false;
      this.secondDepthQuestion.selected = null
      this.thirdDepthQuestions.forEach(element => {
        element.selected = null;
      });
    }
  }
  QuestionReply(question, Reply) {
    question.selected = Reply;
    if (this.firstDepthQuestion.selected) {
      this.thirdDepthQuestionsCheck = true;
      this.secondDepthQuestion.selected = null;
      this.fourDepthQuestionsCheck = false;
    }
    else {
      this.secondDepthQuestionCheck = true;
      this.fourDepthQuestionsCheck = false;
    }
    if (this.secondDepthQuestionCheck) {
      if (this.secondDepthQuestion.selected) {
        this.thirdDepthQuestionsCheck = true;
        this.fourDepthQuestionsCheck = false;
      }
    }

  }
  next() {

    this.nextBtnDisabled = false;
    if (this.thirdDepthQuestionsCheck || this.fourDepthQuestionsCheck) {
      this.thirdDepthQuestions.forEach(element => {
        if (element.selected == null) {
          this.nextBtnDisabled = true;
        }
      });
    }
    else {
      if (this.secondDepthQuestionCheck) {
        if (this.secondDepthQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }
      else {
        if (this.firstDepthQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }
    }
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.thirdDepthQuestionsCheck || this.fourDepthQuestionsCheck) {
        this.thirdDepthQuestions.forEach(element => {
          if (element.selected == true) {
            score = 0;
          }
        });
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
