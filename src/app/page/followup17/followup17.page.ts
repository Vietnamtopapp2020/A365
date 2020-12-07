import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup17',
  templateUrl: './followup17.page.html',
  styleUrls: ['./followup17.page.scss'],
})
export class Followup17Page implements OnInit {
  questions = [
    ['Nói "Mẹ, nhìn này!" hoặc "Nhìn con này!"?', v4()],
    ['Nói bập bẹ hoặc gây tiếng động để kéo sự chú ý của bạn vào trẻ?', v4()],
    ['Nhìn bạn để được bạn khen hoặc nhận xét?', v4()],
    ['Cứ nhìn bạn để xem bạn có đang nhìn trẻ?', v4()],
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
  QUESTION_NUMBER = 17
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
  }
  next() {
    this.nextBtnDisabled = false;
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].selected == null) {
        this.nextBtnDisabled = true;
        break;
      };
    }
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i].selected == true) {
          score = 0;
          break;
        };
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
