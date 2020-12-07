import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup2',
  templateUrl: './followup2.page.html',
  styleUrls: ['./followup2.page.scss'],
})
export class Followup2Page implements OnInit {
  firstDepthQuestions = [
    ['Lờ âm thanh đi không?', v4()],
    ['Lờ người khác đi không?', v4()],
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
  QUESTION_NUMBER = 2
  data = null;
  nextBtnDisabled: boolean;
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
  ReplypassGroup(question, Reply) {
    this.nextBtnDisabled = false;
    question.selected = Reply;
    this.firstDepthQuestions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
      }
    });
  }
  next() {
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      var checkpassGroup = true;
      this.firstDepthQuestions.forEach(element => {
        if (element.selected == true) {
          checkpassGroup = false;
        }
      });
      if (checkpassGroup) {
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
