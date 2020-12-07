import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup9',
  templateUrl: './followup9.page.html',
  styleUrls: ['./followup9.page.scss'],
})
export class Followup9Page implements OnInit {
  firstDepthQuestions = [
    ['Một bức tranh/ảnh hoặc đồ chơi để khoe?', v4()],
    ['Một bức tranh mà bé mới vẽ xong?', v4()],
    ['Một bông hoa bé mới hái?', v4()],
    ['Một con bọ bé tìm thấy trong bãi cỏ?', v4()],
    ['Một vài khối hình mà bé mới xếp?', v4()],
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
      'Có phải thỉnh thoảng những hành động đó chỉ để khoe bạn, chứ không phải để được bạn gúp đỡ phải không?',
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
  QUESTION_NUMBER = 9
  data = null;
  secondDepthCheck = false;
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
      if (this.firstDepthQuestions[i].selected == true) {
        this.secondDepthCheck = true;
        checkfirstDepth = false;
        break;
      };
      if (checkfirstDepth && i == (this.firstDepthQuestions.length - 1)) {
        this.secondDepthCheck = false;
        this.secondDepthQuestion.selected = null;
      }
    }
  }
  next() {

    this.nextBtnDisabled = false;
    for (var i = 0; i < this.firstDepthQuestions.length; i++) {
      if (this.firstDepthQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        break;
      };
      if (i == this.firstDepthQuestions.length - 1) {
        this.nextBtnDisabled == false
      }
    }
    if (this.nextBtnDisabled == false) {
      if (this.secondDepthCheck == true) {
        if (this.secondDepthQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }

    }

    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.secondDepthCheck) {
        if (this.secondDepthQuestion.selected) {
          score = 0;
        }
      }
      body = {
        "position": this.QUESTION_NUMBER,
        "score": score,
        "done": this.data.done
      }
      this.service.PutAPImachartRsatus(this.service.getHost() + 'mchatr/answersheets/' + this.data.id + '/followup', body)
        .subscribe(
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
