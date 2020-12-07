import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup19',
  templateUrl: './followup19.page.html',
  styleUrls: ['./followup19.page.scss'],
})
export class Followup19Page implements OnInit {
  firstDepth = v4();
  firstDepthQuestion = {
    _id: this.firstDepth,
    code: this.firstDepth,
    content: 'Nếu trẻ nghe thấy một tiếng động lạ hoặc tiếng động ghê sợ, con có nhìn mặt bạn trước khi có phản ứng không?',
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
    content: 'Trẻ có nhìn bạn khi gặp một người mới gặp/ mới quen không?',
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
    content: 'Trẻ có nhìn bạn khi con tiếp xúc với một cái gì đó xa lạ hay đáng sợ một chút không?',
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
  QUESTION_NUMBER = 19
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
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  QuestionReply(question, Reply) {
    question.selected = Reply;
    if (this.firstDepthQuestion.selected == false) {
      this.secondDepthQuestionCheck = true;
    }
    else {
      this.secondDepthQuestionCheck = false;
      this.secondDepthQuestion.selected = null;
    }
    if (this.secondDepthQuestion.selected == false) {
      this.thirdDepthQuestionCheck = true
    }
    else {
      this.thirdDepthQuestionCheck = false;
      this.thirdDepthQuestion.selected = null;
    }
  }
  next() {
    this.nextBtnDisabled = false;
    if (this.thirdDepthQuestionCheck == true) {
      if (this.thirdDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
    else {
      if (this.secondDepthQuestionCheck == true) {
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
      if (this.thirdDepthQuestionCheck == true) {
        if (this.thirdDepthQuestion.selected == true) {
          score = 0;
        }
      }
      else {
        if (this.secondDepthQuestionCheck == true) {
          if (this.secondDepthQuestion.selected == true) {
            score = 0;
          }
        }
        else {
          if (this.firstDepthQuestion.selected == true) {
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