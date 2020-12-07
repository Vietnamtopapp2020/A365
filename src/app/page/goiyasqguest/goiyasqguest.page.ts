import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-goiyasqguest',
  templateUrl: './goiyasqguest.page.html',
  styleUrls: ['./goiyasqguest.page.scss'],
})
export class GoiyasqguestPage implements OnInit {
  children = null;
  data: any;
  isEligibleForMchatr: any;
  firstActionOption = 0;
  secondActions = [];
  TitletHard = [];
  TitleFollow = [];
  TitletNormal = [];
  child: any;
  titlefirstActionOption4 = [];
  titlefirstActionOption5 = [];
  titleGoiYChuyenGia = [];
  titleGoiYChuyenGiaKham = "";
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public service: ServiceService,
    private navPamra: NavParams,
    public modalController: ModalController

  ) {

    this.data = this.navPamra.data;
    this.isEligibleForMchatr = this.data.isEligibleForMchatr;
    this.firstActionOption = this.data.firstActionOption;
    this.secondActions = this.data.secondActions;
    this.nextQuestionnareSchedule = this.data.nextQuestionnareSchedule;
    this.TitletHard = this.data.TitletHard;
    this.TitleFollow = this.data.TitleFollow;
    this.TitletNormal = this.data.TitletNormal;
    this.data.dataResult.questionnare.overallQuestions.forEach(element => {
      this.data.dataResult.overallAnswers.forEach(elementData => {
        if (element.question.id == elementData.question.id && elementData.score == 0) {
          if (element.disability != null) {
            if (this.titlefirstActionOption4.indexOf(element.disability) == -1) {
              this.titlefirstActionOption4.push(element.disability);
            }
          }
        }
      });
    });
    this.data.dataResult.fieldsInGreyArea.forEach(element => {
      switch (element) {
        case 'communication':
          this.titlefirstActionOption5.push("Phát âm");
          this.titlefirstActionOption5.push("nghe");
          this.titlefirstActionOption5.push("hiểu");
          this.titlefirstActionOption5.push("thể hiện yêu cầu và nhờ giúp đỡ");
          break;
        case 'grossMotor':
          this.titlefirstActionOption5.push("Vận động tổng thể của cơ thể");
          break;
        case 'fineMotor':
        case 'problemSolving':
          this.titlefirstActionOption5.push("chơi với nhiều loại đồ chơi");
          break;
        case 'personalSocial':
          this.titlefirstActionOption5.push("chơi với những người xung quanh");
          break;
      }
    });
    this.data.dataResult.questionnare.overallQuestions.forEach(element => {
      this.data.dataResult.overallAnswers.forEach(elementData => {
        if (element.question.id == elementData.question.id && elementData.score == 0) {
          if (this.titleGoiYChuyenGia.indexOf(element.referDoctorText) == -1) {
            this.titleGoiYChuyenGia.push(element.referDoctorText);
          }
        }
      });
    });
 }

  ngOnInit() {
  }
  backpage() {
    this.modalController.dismiss();
  }
  nextQuestionnareSchedule = {
    months: 0,
    days: 0,
  }
  MchartR() {
    this.service.message("Vui lòng đăng nhập để thực hiện!")
  }
  OpenDataGame() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "order": 1,
        "children": [
          {
            "order": 1,
            "children": [],
            "_id": "5d50cbe207b9dc0c5c5b92d0",
            "title": "Các mốc phát triển của trẻ",
            "slug": "cac-moc-phat-trien-cua-tre-efd4d009a0",
            "parent": "5e72e631c381bb0020d13f65",
            "createdAt": "2019-08-12T02:16:02.193Z",
            "updatedAt": "2020-03-25T10:38:45.742Z",
            "__v": 16,
            "description": "Trẻ có đang phát triển theo đúng chuẩn lứa tuổi về vận động, ngôn ngữ, nhận thức và cảm xúc?",
            "hexCode": "#3ebdb6",
            "key": "5d50cbe207b9dc0c5c5b92d0",
            "id": "5d50cbe207b9dc0c5c5b92d0"
          },
          {
            "order": 2,
            "children": [],
            "_id": "5e72e733c381bb0020d13f6a",
            "title": "Phát triển kỹ năng cho trẻ",
            "slug": "phat-trien-ky-nang-cho-tre-95a1717e09",
            "description": "Bạn muốn con phát triển tối đa tiềm năng? Hãy cùng con chơi các trò chơi hấp dẫn để giúp con phát triển về giáo tiếp, vận động thô, vận động tinh, giải quyết vấn đề và tương tác cá nhân – xã hội",
            "hexCode": "#000000",
            "parent": "5e72e631c381bb0020d13f65",
            "createdAt": "2020-03-19T03:29:55.006Z",
            "updatedAt": "2020-03-25T10:39:10.798Z",
            "__v": 0,
            "key": "5e72e733c381bb0020d13f6a",
            "id": "5e72e733c381bb0020d13f6a"
          },
          {
            "order": 3,
            "children": [],
            "_id": "5d677f26fa3fde4d2c91dbf6",
            "title": "Các tài liệu hỗ trợ sự phát triển của trẻ",
            "slug": "cac-tai-lieu-ho-tro-su-phat-trien-cua-tre-3d9c9a96dd",
            "description": "Bạn sẽ tìm thấy trong phần này các tài liệu hữu ích về sự phát triển của trẻ",
            "hexCode": "#64a6ca",
            "parent": "5e72e631c381bb0020d13f65",
            "createdAt": "2019-08-29T07:30:46.687Z",
            "updatedAt": "2020-03-25T10:39:38.054Z",
            "__v": 0,
            "key": "5d677f26fa3fde4d2c91dbf6",
            "id": "5d677f26fa3fde4d2c91dbf6"
          }
        ],
        "_id": "5e72e631c381bb0020d13f65",
        "title": "SỰ PHÁT TRIỂN THÔNG THƯỜNG CỦA TRẺ",
        "slug": "su-phat-trien-thong-thuong-cua-tre-13403044a4",
        "description": "Cùng tìm hiểu các mốc phát triển về vận động, ngôn ngữ, nhận thức và cảm xúc của trẻ và những trò chơi, tài liệu hữu ích để giúp trẻ phát triển tốt ở từng lứa tuổi",
        "hexCode": "#B36460",
        "parent": null,
        "createdAt": "2020-03-19T03:25:37.379Z",
        "updatedAt": "2020-08-25T23:55:19.166Z",
        "__v": 4,
        "key": "5e72e631c381bb0020d13f65",
        "id": "5e72e631c381bb0020d13f65"
      }
    };
    this.backpage();
    this.router.navigate(['/kienthucchude'], navigationExtras);
  }
}
