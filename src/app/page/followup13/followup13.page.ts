import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup13',
  templateUrl: './followup13.page.html',
  styleUrls: ['./followup13.page.scss'],
})
export class Followup13Page implements OnInit {
  firstDepth = v4();
  firstDepthQuestion = {
    _id: this.firstDepth,
    code: this.firstDepth,
    content: 'Trẻ có đi bộ trong khi vẫn giữ vào đồ đạc hoặc người khác không?',
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
    content: 'Trẻ có đi bộ mà không cần nắm/ giữ thứ gì không?',
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
  QUESTION_NUMBER = 13

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
    if (this.firstDepthQuestion.selected == true) {
      this.currentDepthFrequency = true;
    }
    else {
      this.currentDepthFrequency = false;
      this.secondDepthQuestion.selected = null;
    }
  }
  next() {
    this.nextBtnDisabled = false;
    if (this.firstDepthQuestion.selected == null) {
      this.nextBtnDisabled = true;
    }
    else {
      if (this.firstDepthQuestion.selected == true) {
        if (this.secondDepthQuestion.selected == null) {
          this.nextBtnDisabled = true;
        }
      }
    }
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.secondDepthQuestion.selected) {
        score = 0;
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
