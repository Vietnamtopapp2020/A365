import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup10',
  templateUrl: './followup10.page.html',
  styleUrls: ['./followup10.page.scss'],
})
export class Followup10Page implements OnInit {
  passGroupQuestions = [
    ['Tìm kiếm người gọi?', v4()],
    ['Nói hoặc bập bẹ?', v4()],
    ['Ngừng những việc đang làm lại?', v4()],
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
    ['Không trả lời/phản ứng?', v4()],
    ['Có vẻ nghe nhưng phớt lờ bố mẹ?', v4()],
    ['Trả lời/ phản ứng chỉ khi bố mẹ đứng trước mặt?,', v4()],
    ['Trả lời/ phản ứng chỉ khi có người chạm vào?', v4()],
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
    content: 'Những phản ứng nào trẻ thể hiện nhiều hơn?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.frequency,
        content: 'Tìm kiếm người gọi, Nói hoặc bập bẹ, Ngừng những việc đang làm lại',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.frequency,
        content: 'Không trả lời/phản ứng, Có vẻ nghe nhưng phớt lờ bố mẹ, Trả lời/ phản ứng chỉ khi bố mẹ đứng trước mặt,, Trả lời/ phản ứng chỉ khi có người chạm vào',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 10
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
  QuestionReply(question, Reply) {
    question.selected = Reply;
    var checkfirstDepth = true;
    for (var i = 0; i < this.failGroupQuestions.length; i++) {
      if (this.failGroupQuestions[i].selected == true) {
        this.currentDepthFrequency = true;
        checkfirstDepth = false;
        break;
      }
      if (checkfirstDepth && i == (this.failGroupQuestions.length - 1)) {
        this.currentDepthFrequency = false;
        this.frequencyQuestion.selected == null;
      }
    }
  }
  next() {
    this.nextBtnDisabled = false;
    if (this.currentDepthFrequency) {
      if (this.frequencyQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
    if (this.nextBtnDisabled == false) {
      for (var i = 0; i < this.failGroupQuestions.length; i++) {
        if (this.failGroupQuestions[i].selected == null) {
          this.nextBtnDisabled = true;
          break;
        }
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
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.currentDepthFrequency == true) {
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
