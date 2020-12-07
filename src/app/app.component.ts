import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { Platform, ModalController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushOptions, PushObject, Push } from '@ionic-native/push/ngx';
// import { EventsService } from 'angular4-events';
import { NavigationExtras, Router } from '@angular/router';
import { MessageConfirmPage } from './page/message-confirm/message-confirm.page';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = -1;
  public appPages = [
    {
      title: "KIẾN THỨC",
      url: '/kienthucchuyenmon',
      icon: 'assets/imgs/tabkt.png'
    },
    {
      title: "HƯỚNG DẪN CAN THIỆP",
      url: '/huongdancanthiep',
      icon: 'assets/imgs/huongdancanthiep.png'
    },
    {
      title: "CÂU HỎI THƯỜNG GẶP",
      url: '/cauhoithuonggap',
      icon: 'assets/imgs/tabch.png'
    },
    {
      title: "BÀI TẬP CAN THIỆP MẪU",
      url: '/video-reference',
      icon: 'assets/imgs/tabvd.png'
    },
    {
      title: "ĐIỀU KHOẢN SỬ DỤNG",
      url: '/termconditions',
      icon: 'assets/imgs/tabdk.png'
    },
    {
      title: "HƯỚNG DẪN SỬ DỤNG",
      url: '/huongdansudung',
      icon: 'assets/imgs/tabhd.png'
    },
    {
      title: "CHÍNH SÁCH BẢO MẬT",
      url: '/chinhsach',
      icon: 'assets/imgs/tabcs.png'
    },
    {
      title: "ĐĂNG XUẤT",
      url: '/login',
      icon: 'assets/imgs/logout.png'
    },
  ];
  url_avatar = "";
  username = "";
  phone = "";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public push: Push,
    public service: ServiceService,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    private fb: Facebook
  ) {
    this.service.Page = "";
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
  }
  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: '379457570494',
        iconColor: '#343434',
        sound: 'true',
        vibrate: 'true',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe((data: any) => {
    });
    pushObject.on('notification').subscribe(async (notification: any) => {

    }, err => { console.log("notifi", err) });

    pushObject.on('registration').subscribe((token) => {
      console.log(" token = " + token.registrationId);
    }, err => { console.log("err2", err) });
    console.log("push successs");
  }
  async moveToFirst() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        txtEmail: this.service.Email,
        id: this.service.id
      },
    };
    this.router.navigate(['/updateprofile'], navigationExtras);

  }
  checkModal = true;
  async logout() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Bạn có chắc chắn muốn đăng xuất?"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          this.selectedIndex = -1;
          this.navCtrl.navigateRoot('/login');
          this.fb.logout()
          .then( )
          .catch(e => console.log('Error logout from Facebook', e));
      
        }
      });
      return await myModal.present();
    }
  }
}
