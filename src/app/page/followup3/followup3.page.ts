import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid'
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followup3',
  templateUrl: './followup3.page.html',
  styleUrls: ['./followup3.page.scss'],
})
export class Followup3Page implements OnInit {
  questions = [
    ['Giả vờ uống nước từ 1 cái cốc đồ chơi?', v4()],
    ['Giả vờ ăn từ 1 cái thìa hoặc dĩa đồ chơi?', v4()],
    ['Giả vờ nói chuyện điện thoại?', v4()],
    ['Giả vờ cho búp bê hoặc thú nhồi bông ăn thức ăn thật hoặc tưởng tượng?', v4()],
    ['Đẩy 1 cái xe như thể nó đang đi trên 1 con đường giả vờ?', v4()],
    ['Giả vờ là một robot, một máy bay, một nữ diễn viên ballet, hoặc bất kỳ nhân vật yêu thích khác?', v4()],
    ['Đặt một nồi đồ chơi trên một bếp giả vờ?', v4()],
    ['Giả vờ khuấy thức ăn?', v4()],
    ['Đặt một vật hoặc con búp bê vào một chiếc xe hơi hoặc xe tải như thể nó là người lái xe hoặc hành khách?', v4()],
    ['Giả vờ hút bụi thảm, quét nhà hoặc cắt cỏ?', v4()],
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
  QUESTION_NUMBER = 3
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
    this.questions.forEach(element => {
      if (element.selected == null) {
        this.nextBtnDisabled = true;
      }
    });
  }
  next() {
    if (this.nextBtnDisabled == false) {
      var body = null;
      var score = 1;
      var checkpassGroup = false;
      this.questions.forEach(element => {
        if (element.selected == true) {
          checkpassGroup = true;
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