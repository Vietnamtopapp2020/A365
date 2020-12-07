import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SendmailcdcPage } from '../sendmailcdc/sendmailcdc.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketquacdc',
  templateUrl: './ketquacdc.page.html',
  styleUrls: ['./ketquacdc.page.scss'],
})
export class KetquacdcPage implements OnInit {

  children = null;
  data: any;
  child: any;
  _id: any;
  name: any;
  cid: any;
  dob: any;
  profile: any;
  nameanwser: any;
  createat: any;
  score: any;
  ketqua: any;
  childid: any;
  postname: any;
  anwser: any;
  link: any;
  createdId: any;
  detail: any;
  description: any;
  answers = [];
  listquets: any;
  notifi = [{
    text: 'Lưu thành công'
  }]
  checkopen = false;
  checkopen1 = true;
  checkopen2 = false;
  checkopen3 = false;
  txtanswersheetId: string;
  txtchildId: string;
  imgChilder = "assets/icon/iconchilmale0";
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public router: Router,
    public toast: ToastServiceService,
    public modalController: ModalController,
    public netWork: Network
  ) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "ketqua";
    this.service.backPage = this.data.pageKQ;
    this.GetResutlAtec();
  }

  ionViewDidEnter(){
    this.service.Page = "ketqua";
  }
  ngOnInit() {
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
  GetResutlAtec() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'cdc/answersheets/' + this.data.createdId).subscribe
        (rs => {

          var result = rs.json();
          this.children = result;
          var randon = this.children.child.cid % 6;
          if (this.children.child.gender == 'male') {
            this.imgChilder = "assets/icon/iconchilmale" + randon + ".png";
          }
          else {
            this.imgChilder = "assets/icon/iconchilfemale" + randon + ".png";
          }
          this.name = this.children.child.name;
          this._id = this.children.id
          this.cid = this.children.child.id;
          this.childid = this.children.child.cid;
          this.dob = this.children.child.birthDate.day + "-" + this.children.child.birthDate.month + "-" + this.children.child.birthDate.year;
          this.nameanwser = this.children.profile != undefined ? this.children.profile.name : "";
          this.createat = moment(this.children.createdAt).format("DD-MM-YYYY");
          this.score = this.children.score;
          this.postname = this.children.questionnare.name;
          if (this.children.score > 0) {
            this.anwser = 'có ít nhất một dấu hiệu cần lưu ý về phát triển. Bạn hãy làm tiếp'
            this.detail = ' bộ câu hỏi đánh giá phát triển ASQ®-3'
            this.description = '  để đánh giá cách toàn diện hơn về sự phát triển của trẻ.'
          }
          else {
            this.anwser = 'hiện chưa có dấu hiệu nào cần lưu ý về phát triển trong độ tuổi của trẻ. Tuy nhiên, để đánh giá một cách toàn diện hơn về sự phát triển của trẻ, hãy thường xuyên theo dõi sự phát triển của trẻ và làm'
            this.detail = '  bộ câu hỏi đánh giá phát triển ASQ®-3'
            this.description = '(đặc biệt là các mốc 9, 18, 24, hoặc 30 tháng tuổi) hoặc bất cứ khi nào bạn cảm thấy băn khoăn, lo lắng về sự phát triển của trẻ.'
          }
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
  ASQ() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ObjectPage: this.children.child,
        pageKQ: this.data.pageKQ
      }
    };
    this.router.navigate(['/asqtest'], navigationExtras)
  }
  xemlai() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.data.createdId
      }

    };
    this.router.navigate(['/update-cdc-view'], navigationExtras)
  }
  backpage() {
    this.router.navigate([this.data.pageKQ])
  }

} 
