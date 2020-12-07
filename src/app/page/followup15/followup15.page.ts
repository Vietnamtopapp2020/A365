import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup15',
  templateUrl: './followup15.page.html',
  styleUrls: ['./followup15.page.scss'],
})
export class Followup15Page implements OnInit {
  questions = [
    ['Lè lưỡi của bạn?', v4()],
    ['Tạo ra tiếng động vui tai', v4()],
    ['Vẫy chào tạm biệt?', v4()],
    ['Vỗ tay?', v4()],
    ['Đặt ngón tay lên môi để ra ký hiệu "suỵt!"?', v4()],
    ['Hôn gió?', v4()],
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
  QUESTION_NUMBER = 15
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
      var countTrue = 0
      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i].selected == true) {
          countTrue = countTrue + 1;
        };
      }
      if (countTrue >= 2) {
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