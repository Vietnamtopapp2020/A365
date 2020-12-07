import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup7',
  templateUrl: './followup7.page.html',
  styleUrls: ['./followup7.page.scss'],
})
export class Followup7Page implements OnInit {
  firstDepthQuestions = [
    ['Một cái máy bay trên trời?', v4()],
    ['Một chiếc xe tải trên đường?', v4()],
    ['Một con bọ trên mặt đất?', v4()],
    ['Một con vật trong sân?', v4()],
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
    selected: null

  }))
  secondDepth = v4();
  secondDepthQuestion = {
    _id: this.secondDepth,
    code: this.secondDepth,
    content: 'Làm thế nào để con thu hút sự chú ý của bạn đến thứ đó? Trẻ có dùng 1 ngón tay để chỉ?',
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
    selected: null

  }
  thirdDepth = v4();
  thirdDepthQuestion = {
    _id: this.thirdDepth,
    code: this.thirdDepth,
    content: 'Trẻ làm vậy để thể hiện sự thích thú, chứ không phải để được giúp đỡ phải không?',
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
    selected: null

  }
  QUESTION_NUMBER = 7;
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
    var checkfirstDepth = true;
    for (var i = 0; i < this.firstDepthQuestions.length; i++) {
      if (this.firstDepthQuestions[i].selected == null) {
      };
      if (this.firstDepthQuestions[i].selected == true) {
        this.secondDepthCheck = true;
        checkfirstDepth = false;
        break;
      };
      if (checkfirstDepth && i == (this.firstDepthQuestions.length - 1)) {
        this.thirdDepthCheck = false;
        this.secondDepthCheck = false;
        this.secondDepthQuestion.selected = null
      }
    }
    if (this.secondDepthQuestion.selected == true) {
      this.thirdDepthCheck = true;
    }
  }
  next() {
    this.nextBtnDisabled = false;
    for (var i = 0; i < this.firstDepthQuestions.length; i++) {
      if (this.firstDepthQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        break;
      };
    }

    if (this.secondDepthCheck == true) {
      if (this.secondDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
    if (this.thirdDepthCheck == true) {
      if (this.thirdDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
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
