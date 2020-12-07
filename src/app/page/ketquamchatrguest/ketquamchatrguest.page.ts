import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SendmailmchatrguestPage } from '../sendmailmchatrguest/sendmailmchatrguest.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketquamchatrguest',
  templateUrl: './ketquamchatrguest.page.html',
  styleUrls: ['./ketquamchatrguest.page.scss'],
})
export class KetquamchatrguestPage implements OnInit {
  children = null;
  checkopen = false;
  checkopen1 = false;
  checkopen2 = false;
  checkopen3 = false;
  data: any;
  child: any;
  name: any;
  cid: any;
  dob: any;
  profile: any;
  nameanwser: any;
  createat: any;
  numberPhone = "";
  score: any;
  ketqua: any;
  text: any;
  link: any;
  desciptions: any;
  detail: any;
  isgender = "";
  imgChilder = "assets/icon/iconchilmale0";
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public router: Router,
    public modalController: ModalController,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "ketqua";
    this.service.backPage = '/register';
  }

  ionViewDidEnter() {
    this.service.Page = "ketqua";
  }
  ngOnInit() {
    this.GetResutlmcharR();
  }
  GetResutlmcharR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/guest/answersheets/' + this.data.createdId.id + "?token=" + this.data.token).subscribe
        (rs => {
          var result = rs.json();
          this.children = result;
          if (this.children.child.gender == 'male') {
            this.imgChilder = "assets/icon/iconchilmale3.png";
          }
          else {
            this.imgChilder = "assets/icon/iconchilfemale1.png";
          }
          this.name = this.children.child.name;
          this.cid = this.children.child.cid;
          this.dob = this.children.child.birthDate.day + "-" + this.children.child.birthDate.month + "-" + this.children.child.birthDate.year;
          this.nameanwser = this.children.profile.name;
          this.createat = moment(this.children.createdAt).format("DD-MM-YYYY");
          this.numberPhone = this.children.profile.phoneNumber;
          this.score = this.children.followupScore;
          if (this.children.child.gender == "male") {
            this.isgender = "Nam";
          }
          else {
            this.isgender = "Nữ";
          }
          if (this.score <= 2) {
            this.ketqua = 'Nguy cơ thấp';
            this.text = 'Kết quả cho thấy bạn không cần phải lo lắng nguy cơ tự kỷ của trẻ. Bạn chưa cần phải hành động gì trừ khi trong quá trình theo dõi bạn thấy lo lắng về sự phát triển hay các dấu hiệu nguy cơ tự kỷ của trẻ. Lúc đó hãy đến cơ sở y tế chuyên khoa nhi để thăm khám.'
            this.desciptions = 'Bạn nên quay lại ứng dụng sau sinh nhật 2 tuổi của trẻ để thực hiện lại M-CHAT-R.'
            this.link = '',
              this.detail = ''
          }
          else if (this.score >= 3 && this.score <= 7) {
            this.ketqua = 'Nguy cơ trung bình';
            this.text = '  Kết quả của M-CHAT-R™ cho thấy trẻ có thể có nguy cơ tự kỷ. Bạn nên đưa trẻ đến cán bộ y tế để thực hiện bước tiếp theo – Trả lời Bộ câu hỏi Theo dõi nhằm có kết quả sàng lọc chính xác hơn. Bạn cũng có thể đưa trẻ đi đánh giá, chẩn đoán chuyên sâu tự kỷ tại các cơ sở trong';
            this.desciptions = ' Danh sách một số cơ sở y tế được tập huấn và hiện đang có thực hiện đánh giá và chẩn đoán tự kỷ ';
            this.link = 'https://stage.a365.vn/kien-thuc/bai-viet/danh-sach-mot-so-co-so-y-te-duoc-tap-huan-va-hien-dang-co-thuc-hien-danh-gia-va-chan-doan-tu-ky-13580a686b',
              this.detail = ''
          }
          else (
            this.ketqua = 'Nguy cơ cao',
            this.text = 'Kết quả của sàng lọc cho thấy trẻ có nguy cơ tự kỷ. Bạn nên đến các cơ sở có uy tín về đánh giá và chẩn đoán tự kỷ để xác định tình trạng của con mình. Bạn có thể tìm thấy tên và địa chỉ của các cơ sở trong',
            this.desciptions = '  Danh sách một số cơ sở y tế được tập huấn và hiện đang có thực hiện đánh giá và chẩn đoán tự kỷ',
            this.link = 'https://stage.a365.vn/kien-thuc/bai-viet/danh-sach-mot-so-co-so-y-te-duoc-tap-huan-va-hien-dang-co-thuc-hien-danh-gia-va-chan-doan-tu-ky-13580a686b',
            this.detail = ''
          )
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  backpage() {
    this.router.navigate(['/register'])
  }
  History() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.data.createdId.id,
        token: this.data.token
      }
    };
    this.router.navigate(['/update-mchat-rview-guest'], navigationExtras);
  }
  opendanhgia() {
    this.checkopen = !this.checkopen
  }
  opendanhgia1() {
    this.checkopen1 = !this.checkopen1
  }
  opendanhgia2() {
    this.checkopen2 = !this.checkopen2
  }
  opendanhgia3() {
    this.checkopen3 = !this.checkopen3
  }
  checkSendMail = false;
  async sendmail() {
    if (!this.checkSendMail) {
      this.checkSendMail = true;
      const myModal = await this.modalController.create({
        component: SendmailmchatrguestPage,
        componentProps: {
          createdId: this.data.createdId.id
        },
        cssClass: ""

      });
      myModal.onDidDismiss().then(rs => {
        this.checkSendMail = false;
      });
      return await myModal.present();
    }
  }
  OpenLink() {
    if (this.link != "") {
      this.router.navigate(["/list-healthfaciliti"])
    }
  }
}
