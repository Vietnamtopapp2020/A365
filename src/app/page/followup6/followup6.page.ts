import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup6',
  templateUrl: './followup6.page.html',
  styleUrls: ['./followup6.page.scss'],
})
export class Followup6Page implements OnInit {
  firstDepthQuestions = [
    ['Với đồ vật đó bằng cả tay?', v4()],
    ['Dẫn bạn đến đồ vật đó?', v4()],
    ['Cố gắng tự lấy đồ vật đó?', v4()],
    ['Yêu cầu lấy đồ vật bằng từ ngữ hoặc tạo ra âm thanh?', v4()],
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
  }));
  idfrequency = v4();
  secondDepthQuestion = {
    _id: this.idfrequency,
    code: this.idfrequency,
    content: 'Nếu bạn nói "Chỉ cho cha/ mẹ xem nào", trẻ có chỉ vào thứ đó?',
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 1,
    options: [
      {
        id: this.idfrequency,
        content: 'Có',
        point: 1,
        hasInput: true,
        inputType: undefined,
      },
      {
        id: this.idfrequency,
        content: 'Không',
        point: 0,
        hasInput: false,
        inputType: undefined,
      },
    ],
    selected: null,
  }
  QUESTION_NUMBER = 6
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
  ReplyfirstDepth(question, Reply) {
    question.selected = Reply;
    this.nextBtnDisabled = false;
    this.currentDepthFrequency = false;
    var check = true;
    for (var i = 0; i < this.firstDepthQuestions.length; i++) {
      if (this.firstDepthQuestions[i].selected == null) {
        this.nextBtnDisabled = true;
        this.currentDepthFrequency = false;
        check = false;
        break;
      }
    }
    if (check) {
      for (var i = 0; i < this.firstDepthQuestions.length; i++) {
        if (this.firstDepthQuestions[i].selected == true) {
          this.currentDepthFrequency = true;
          break;
        }
      }
    }
    if (this.currentDepthFrequency && this.nextBtnDisabled == false) {
      if (this.secondDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  ReplysecondDepth(question, Reply) {
    question.selected = Reply;
    this.nextBtnDisabled = false;
    if (this.currentDepthFrequency) {
      if (this.secondDepthQuestion.selected == null) {
        this.nextBtnDisabled = true;
      }
    }
  }
  next() {
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      if (this.currentDepthFrequency) {
        if (this.secondDepthQuestion.selected) {
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

