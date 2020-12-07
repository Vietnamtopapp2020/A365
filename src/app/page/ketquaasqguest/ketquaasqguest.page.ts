import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SendmailasqguestPage } from '../sendmailasqguest/sendmailasqguest.page';
import { NhanxetasqPage } from '../nhanxetasq/nhanxetasq.page';
import { GoiyasqguestPage } from '../goiyasqguest/goiyasqguest.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketquaasqguest',
  templateUrl: './ketquaasqguest.page.html',
  styleUrls: ['./ketquaasqguest.page.scss'],
})
export class KetquaasqguestPage implements OnInit {
  checkopen = false;
  checkopen1 = false;
  checkopen2 = false;
  checkopen3 = false;
  checkopen4 = false;
  checkopen5 = false;
  children = null;
  data: any;
  _id: any;
  name: any;
  cid: any;
  dob: any;
  nameanwser: any;
  createat: any;
  score: any;
  childid = "";
  postname: any;
  listquets: any;
  communicationAnswers = [];
  communicationscore: any;
  grossMotorAnswers = [];
  grossMotorscore: any;
  fineMotorAnswers = [];
  fineMotorscore: any;
  problemSolvingAnswers = [];
  problemSolvingscore: any;
  personalSocialAnswers = [];
  personalSocialscore: any;
  overallAnswers = [];
  overallscore: any;
  notifi = [{
    text: 'Lưu thành công'
  }]
  chilid: any;
  txtanswersheetId: string;
  communicationThreshold: any;
  grossMotorThreshold: any;
  fineMotorThreshold: any;
  problemSolvingThreshold: any;
  personalSocialThreshold: any;
  firstActionOption = 0;
  isEligibleForMchatr = false;
  gender: any;
  isgender: string;
  phone = "";
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
    this.GetResutlASQ();

  }

  ionViewDidEnter() {
    this.service.Page = "ketqua";
  }
  ngOnInit() {
  }
  nextQuestionnareSchedule = {
    months: 0,
    days: 0,
  }
  getNextQuestionnareSchedule() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'asq/guest/questionnares/getNextQuestionnareSchedule?childId=' + this.chilid).subscribe
        (rs => {
          var result = rs.json();
          this.nextQuestionnareSchedule = result;
        });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
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
  opendanhgia4() {
    this.checkopen4 = !this.checkopen4
  }
  opendanhgia5() {
    this.checkopen5 = !this.checkopen5
  }
  CCommunication = 0;
  CFineMotor = 0;
  CGrossMotor = 0;
  CPersonalSocial = 0;
  CProblemSolving = 0;
  MCommunication = 0;
  MFineMotor = 0;
  MGrossMotor = 0;
  MPersonalSocial = 0;
  MProblemSolving = 0;
  SCommunication = 0;
  SFineMotor = 0;
  SGrossMotor = 0;
  SPersonalSocial = 0;
  SProblemSolving = 0;
  TitletHard = [];
  TitleFollow = [];
  TitletNormal = [];
  secondActions = [];
  GetResutlASQ() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'asq/guest/answersheets/' + this.data.createdId.id + "?token=" + this.data.token).subscribe
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
          this.cid = this.children.child.id;
          this.childid = this.children.child.cid;
          this.dob = this.children.child.birthDate.day + "-" + this.children.child.birthDate.month + "-" + this.children.child.birthDate.year;
          this.nameanwser = this.children.profile.name;
          this.createat = moment(this.children.createdAt).format("DD-MM-YYYY");
          this.score = this.children.score;
          this.phone = this.children.profile.phoneNumber;
          this.postname = this.children.questionnare.name;
          if (this.children.overallAnswersSuggestMCHAT && this.children.child.ageInMonths >= 16 && this.children.child.ageInMonths <= 30) {
            this.isEligibleForMchatr = true;
          }
          this.gender = this.children.child.gender;
          if (this.gender == "male") {
            this.isgender = "Nam";
          }
          else {
            this.isgender = "Nữ";
          }

          // phan 3
          this.SCommunication = this.children.scoreByField.communication / 60 * 80 + 2;
          this.SFineMotor = this.children.scoreByField.fineMotor / 60 * 80 + 2;
          this.SGrossMotor = this.children.scoreByField.grossMotor / 60 * 80 + 2;
          this.SPersonalSocial = this.children.scoreByField.personalSocial / 60 * 80 + 2;
          this.SProblemSolving = this.children.scoreByField.problemSolving / 60 * 80 + 2;

          this.communicationscore = this.children.scoreByField.communication;
          this.fineMotorscore = this.children.scoreByField.fineMotor;
          this.grossMotorscore = this.children.scoreByField.grossMotor;
          this.personalSocialscore = this.children.scoreByField.personalSocial;
          this.problemSolvingscore = this.children.scoreByField.problemSolving;

          this.communicationThreshold = this.children.questionnare.cutoffPoint.communication
          this.fineMotorThreshold = this.children.questionnare.cutoffPoint.fineMotor
          this.grossMotorThreshold = this.children.questionnare.cutoffPoint.grossMotor
          this.personalSocialThreshold = this.children.questionnare.cutoffPoint.personalSocial
          this.problemSolvingThreshold = this.children.questionnare.cutoffPoint.problemSolving

          this.MCommunication = this.children.questionnare.monitoringPoint.communication / 60 * 80;
          this.MFineMotor = this.children.questionnare.monitoringPoint.fineMotor / 60 * 80;
          this.MGrossMotor = this.children.questionnare.monitoringPoint.grossMotor / 60 * 80;
          this.MPersonalSocial = this.children.questionnare.monitoringPoint.personalSocial / 60 * 80;
          this.MProblemSolving = this.children.questionnare.monitoringPoint.problemSolving / 60 * 80;

          this.CCommunication = this.children.questionnare.cutoffPoint.communication / 60 * 80;
          this.CFineMotor = this.children.questionnare.cutoffPoint.fineMotor / 60 * 80;
          this.CGrossMotor = this.children.questionnare.cutoffPoint.grossMotor / 60 * 80;
          this.CPersonalSocial = this.children.questionnare.cutoffPoint.personalSocial / 60 * 80;
          this.CProblemSolving = this.children.questionnare.cutoffPoint.problemSolving / 60 * 80;
          // phàn 4
          this.children.fieldsInWhiteArea.forEach(element => {
            switch (element) {
              case 'communication':
                this.TitletNormal.push('Giao tiếp');
                break;
              case 'grossMotor':
                this.TitletNormal.push('Vận động thô');
                break;
              case 'fineMotor':
                this.TitletNormal.push('Vận động tinh');
                break;
              case 'problemSolving':
                this.TitletNormal.push('Giải quyết vấn đề');
                break;
              case 'personalSocial':
                this.TitletNormal.push('Cá nhân xã hội');
                break;
            }
          });
          this.children.fieldsInGreyArea.forEach(element => {
            switch (element) {
              case 'communication':
                this.TitleFollow.push('Giao tiếp')
                break;
              case 'grossMotor':
                this.TitleFollow.push('Vận động thô')
                break;
              case 'fineMotor':
                this.TitleFollow.push('Vận động tinh')
                break;
              case 'problemSolving':
                this.TitleFollow.push('Giải quyết vấn đề')
                break;
              case 'personalSocial':
                this.TitleFollow.push('Cá nhân xã hội')
                break;
            }
          });
          this.children.fieldsInBlackArea.forEach(element => {
            switch (element) {
              case 'communication':
                this.TitletHard.push('Giao tiếp')
                break;
              case 'grossMotor':
                this.TitletHard.push('Vận động thô')
                break;
              case 'fineMotor':
                this.TitletHard.push('Vận động tinh')
                break;
              case 'problemSolving':
                this.TitletHard.push('Giải quyết vấn đề')
                break;
              case 'personalSocial':
                this.TitletHard.push('Cá nhân xã hội')
                break;
            }
          });
          // phần 5
          const triplet = ['communication', 'problemSolving', 'personalSocial']
          if (this.children.fieldsInWhiteArea.length == 5 && this.children.overallAnswersSuggestMCHAT == false) {
            this.firstActionOption = 1;
          }

          else if (this.children.fieldsInGreyArea.length >= 1 && this.children.fieldsInGreyArea.length <= 3 && this.children.fieldsInGreyArea.filter(x => triplet.includes(x)).length !== triplet.length && this.children.fieldsInBlackArea.length === 0) {
            this.firstActionOption = 2;
          }
          else if (this.children.fieldsInGreyArea.length >= 3 || this.children.fieldsInGreyArea.filter(x => triplet.includes(x)).length === triplet.length || this.children.fieldsInBlackArea.length >= 1) {
            this.firstActionOption = 3
          }
          else if (this.children.fieldsInWhiteArea.length === 5 && this.children.overallAnswersSuggestMCHAT) {
            this.firstActionOption = 4;
          }
          else if (this.children.fieldsInGreyArea.length <= 3 && this.children.fieldsInGreyArea.length > 0 && this.children.fieldsInGreyArea.filter(x => triplet.includes(x)).length !== triplet.length && this.children.fieldsInBlackArea.length === 0 && this.children.overallAnswersSuggestMCHAT) {
            this.firstActionOption = 5
          }
          this.getNextQuestionnareSchedule();
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
  BackPage() {
    this.router.navigate(['/register'])

  }
  checkSendMail = false;
  async sendmail() {
    if (!this.checkSendMail) {
      this.checkSendMail = true;
      const myModal = await this.modalController.create({
        component: SendmailasqguestPage,
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
  MchartR() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.children.child
    };
    this.router.navigate(['/mchatrguest'], navigationExtras);
  }
  checkModal = true;
  async Nhanxet() {

    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalController.create({
        component: NhanxetasqPage,
        componentProps: {
          name: this.name,
          TitletNormal: this.TitletNormal,
          TitleFollow: this.TitleFollow,
          TitletHard: this.TitletHard
        }
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
      });
      return await myModal.present();
    }
  }
  async Goiy() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalController.create({
        component: GoiyasqguestPage,
        componentProps: {
          firstActionOption: this.firstActionOption,
          nextQuestionnareSchedule: this.nextQuestionnareSchedule,
          isEligibleForMchatr: this.isEligibleForMchatr,
          secondActions: this.secondActions,
          child: this.children.child,
          TitletNormal: this.TitletNormal,
          TitleFollow: this.TitleFollow,
          TitletHard: this.TitletHard,
          dataResult: this.children
        }
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
      });
      return await myModal.present();
    }
  }
  Bangdiem() {
    this.router.navigate(['/bangcauhoiasq'])
  }
}

