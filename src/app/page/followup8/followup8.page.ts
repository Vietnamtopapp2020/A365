import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup8',
  templateUrl: './followup8.page.html',
  styleUrls: ['./followup8.page.scss'],
})
export class Followup8Page implements OnInit {
  firstDepth = v4();
  firstDepthQuestion = {
    _id: this.firstDepth,
    code: this.firstDepth,
    content:
      'Khi bạn và bé ở sân chơi hoặc siêu thị, bé có thường có biểu hiện tương tác với những đứa trẻ khác không?',
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
  secondDepthQuestions = [
    ['Chơi với 1 trẻ khác?', v4()],
    ['Nói chuyện với 1 trẻ khác?', v4()],
    ['Bập bẹ hoặc phát ra các âm thanh?', v4()],
    ['Quan sát hoặc nhìn trẻ khác?', v4()],
    ['Cười với trẻ khác?', v4()],
    ['Ban đầu ngại ngùng, nhưng sau đó cười?', v4()],
    ['Hào hứng với một trẻ khác?', v4()],
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
  thirdDepth = v4();
  thirdDepthQuestion = {
    _id: this.thirdDepth,
    code: this.thirdDepth,
    content:
      'Trẻ có phản ứng với những trẻ em khác hơn một nửa thời gian chúng chơi với nhau không?',
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
  QUESTION_NUMBER = 8
  data = null;
  secondDepthCheck = false;
  thirdDepthCheck = false;
  nextBtnDisabled = true;
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

    if (this.firstDepthQuestion.selected) {
      this.secondDepthCheck = true;
    }
    else {
      this.secondDepthCheck = false;
      this.thirdDepthCheck = false;
    }
    var checkfirstDepth = true;
    for (var i = 0; i < this.secondDepthQuestions.length; i++) {
      if (this.secondDepthQuestions[i].selected == true) {
        this.thirdDepthCheck = true;
        checkfirstDepth = false;
        break;
      };
      if (checkfirstDepth && i == (this.secondDepthQuestions.length - 1)) {
        this.thirdDepthCheck = false;
        this.thirdDepthQuestion.selected == null;
      }
    }
  }
  next() {
    this.nextBtnDisabled = false;
    if (this.firstDepthQuestion.selected == null) {
      this.nextBtnDisabled = true;
    }
    else {
      if (this.firstDepthQuestion.selected == true) {
        for (var i = 0; i < this.secondDepthQuestions.length; i++) {
          if (this.secondDepthQuestions[i].selected == null) {
            this.nextBtnDisabled = true;
            break;
          };
          if (i == this.secondDepthQuestions.length - 1) {
            this.nextBtnDisabled == false
          }
        }
        if (this.nextBtnDisabled == false) {
          if (this.thirdDepthCheck == true) {
            if (this.thirdDepthQuestion.selected == null) {
              this.nextBtnDisabled = true;
            }
          }
        }
      }
    }

    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.thirdDepthCheck) {
        if (this.thirdDepthQuestion.selected) {
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