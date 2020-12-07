import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SendmailatecPage } from '../sendmailatec/sendmailatec.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketqua-atec',
  templateUrl: './ketqua-atec.page.html',
  styleUrls: ['./ketqua-atec.page.scss'],
})
export class KetquaATECPage implements OnInit {
  children = null;
  checkopen = false;
  checkopen1 = false;
  checkopen2 = false;
  checkopen3 = false;
  data: any;
  child: any;
  name: any;
  _id: any
  cid: any;
  dob: any;
  postname = '';
  childid = '';
  profile: any;
  nameanwser: any;
  createat: any;
  score: any;
  ketqua: any;
  healthPhysicalBehavior: any;
  sensoryCognitiveAwareness: any;
  sociability: any;
  speech: any;
  imgChilder = "assets/icon/iconchilmale0";
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public router: Router,
    public modalController: ModalController,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "ketqua";
    this.service.backPage = this.data.pageKQ;
  }
  ionViewDidEnter(){
    this.service.Page = "ketqua";
  }
  ngOnInit() {
    this.GetResutlAtec();
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
      this.service.postGet(this.service.getHost() + 'atec/answersheets/' + this.data.createdId).subscribe
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
          this.cid = this.children.child.id.substr(length - 5);
          this.childid = this.children.child.cid;
          this.dob = this.children.child.birthDate.day + "-" + this.children.child.birthDate.month + "-" + this.children.child.birthDate.year;
          this.nameanwser = this.children.profile.name;
          this.createat = moment(this.children.createdAt).format("DD-MM-YYYY");
          this.score = this.children.score;
          this.healthPhysicalBehavior = this.children.scoreByField.healthPhysicalBehavior;
          this.sensoryCognitiveAwareness = this.children.scoreByField.sensoryCognitiveAwareness;
          this.sociability = this.children.scoreByField.sociability;
          this.speech = this.children.scoreByField.speech;
          console.log(JSON.stringify(this.children));
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
    }else{
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  History() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.children.id

    };
    this.router.navigate(['/update-atec-view'], navigationExtras);
  }

  backpage() {
    this.router.navigate([this.data.pageKQ])
  }
  checkSendMail = false;
  async sendmail() {
    if (!this.checkSendMail) {
      this.checkSendMail = true;
      const myModal = await this.modalController.create({
        component: SendmailatecPage,
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
