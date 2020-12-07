import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SendmailmqolPage } from '../sendmailmqol/sendmailmqol.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketquaqol',
  templateUrl: './ketquaqol.page.html',
  styleUrls: ['./ketquaqol.page.scss'],
})
export class KetquaqolPage implements OnInit {
  children = null;
  data: any;
  child: any;
  name: any;
  cid: any;
  dob: any;
  profile: any;
  nameanwser: any;
  createat: any;
  score: any;
  ketqua: any;
  averageScore: any;
  checkopen = false;
  checkopen1 = false;
  checkopen2 = false;
  checkopen3 = false;
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
    this.service.backPage = this.data.pageKQ;
  }

  ionViewDidEnter() {
    this.service.Page = "ketqua";
  }
  ngOnInit() {
    this.GetResutqol();
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
  GetResutqol() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'qol/answersheets/' + this.data.createdId).subscribe
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
          this.cid = this.children.child.cid;
          this.dob = this.children.child.birthDate.day + "-" + this.children.child.birthDate.month + "-" + this.children.child.birthDate.year;
          this.nameanwser = this.children.profile.name;
          this.createat = moment(this.children.createdAt).format("DD-MM-YYYY");
          this.score = this.children.score;
          this.averageScore = this.children.averageScore;
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
  History() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.data.createdId

    };
    this.router.navigate(['/update-qol-view'], navigationExtras);
  }
  backpage() {
    this.router.navigate([this.data.pageKQ])
  }
  checkSendMail = false;
  async sendmail() {
    if (!this.checkSendMail) {
      this.checkSendMail = true;
      const myModal = await this.modalController.create({
        component: SendmailmqolPage,
        componentProps: {
          createdId: this.data.createdId
        },
        cssClass: ""

      });
      myModal.onDidDismiss().then(rs => {
        this.checkSendMail = false;
      });
      return await myModal.present();
    }
  }
}
