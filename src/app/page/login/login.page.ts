import { Component, } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { SendmailActivatedPage } from '../sendmail-activated/sendmail-activated.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public version: any;
  message: string;
  txtEmail = "";
  txtPassword = "";
  txtPinCode: any;
  nameDisplay: any;
  emailFB: any;
  urlAvata: any;
  token_code: any;
  select_company: any;
  checkpass = true;
  chechdata: boolean;
  public UserName: String;
  public PassWord: String;
  public Login: String;
  public language: any;
  dataUsernameLogin = [];
  checkLanguage: boolean = false;
  checkPin: boolean = false;
  imgLanguage: any;
  codeLanguage: any;
  LOGINPAGE_USERNAME = "Email";
  LOGINPAGE_PASSWORD = "Mật khẩu";

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public service: ServiceService,
    public push: Push,
    public toast: ToastServiceService,
    private router: Router,
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private storage: Storage,
    public netWork: Network,
    private fb: Facebook
  ) {
    this.service.Page = "";
    this.getToken();
    this.storage.get('userLogin').then(dataa => {
      if (dataa.check == true) {
        this.checkpass = true;
        this.txtEmail = dataa.userName;
        this.txtPassword = dataa.password;
      }
    });
  }
  Dangky() {
    this.router.navigate(['/dangki']);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  LoginNoCheckOnline() {
    var body = ('email=' + this.txtEmail + '&password=' + this.txtPassword);
    if (this.netWork.type.toUpperCase() != "NONE") {
      if (!this.service.CheckLoading) {
        this.toast.showLoading("");
        this.service.CheckLoading = true;
      }
      this.service.postAPILogin(this.service.getHost() + 'auth/login', body)
        .subscribe(result => {
          var rs = result.json();
          this.service.tokenId = rs.accessToken;
          this.service.postGet(this.service.getHost() + 'users/me').subscribe
            (rs => {
              var result = rs.json();
              if (result.isVerified == false) {
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
               this.sendmail();
              }
              else {
                this.service.Role = result.role;
                this.service.profile = result.profile;
                this.service.address = result.profile.address;
                this.service.area = result.profile.area;
                this.service.areaOrder = result.profile.areaOrder;
                this.service.birthYear = result.profile.birthYear;
                this.service.createdAt = result.profile.createdAt;
                this.service.district = result.profile.district;
                this.service.email = result.profile.email;
                this.service.ethnic = result.profile.ethnic;
                this.service.gender = result.profile.gender;
                this.service.id = result.profile.id;
                this.service.isDeleted = result.profile.isDeleted;
                this.service.job = result.profile.job;
                this.service.name = result.profile.name;
                this.service.phoneNumber = result.profile.phoneNumber;
                this.service.pid = result.profile.pid;
                this.service.referSource = result.profile.referSource;
                this.service.updatedAt = result.profile.updatedAt;
                this.service.user = result.profile.user;
                this.service.ward = result.profile.ward;
                this.service.workplace = result.profile.workplace;
                this.saveCache(
                  this.txtEmail,
                  this.txtPassword,
                  this.checkpass,
                );
                // if (result.role == 1) {
                //   this.navCtrl.navigateRoot('/doashboadparent');
                // }
                // else if (result.role == 2) {
                //   this.navCtrl.navigateRoot('/dashboard');
                // }
                // else {
                //   this.navCtrl.navigateRoot('/dashboadteacher');
                // }
                this.navCtrl.navigateRoot('/trangcuatoi');
              }
            }, error => {
              if (this.service.CheckLoading) {
                this.service.CheckLoading = false;
                this.toast.DismissToast();
              };
            });
        }, er => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var error = er.json();
          this.service.message(error.message);
        });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  register() {
    this.router.navigate(['/register'])
  }
  ForgotPassword() {

    this.router.navigate(['/forgot-pass'])
  }

  getToken() {
    const options: PushOptions = {
      android: {
        senderID: '495931051565',
        iconColor: '#343434',
        sound: 'true',
        vibrate: 'true',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {

      }
    };

    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe((token) => {

      this.service.tokenDeceive = token.registrationId;
    });
  }
  CheckGmailLogin() {
    if (this.txtEmail == "" || this.txtPassword == "") {
      this.service.message("Vui lòng nhập đầy đủ thông tin!")
    }
    else {
      this.service.postAPI("https://3i.s-work.vn/MobileLogin/CheckUserA365", "gmail=" + this.txtEmail).subscribe(result => {
        var rs = result.json();
        if (rs.Error == false) {
          this.LoginNoCheckOnline();
        }
        else {
          this.service.message(rs.Title)
        }
      }, er => {
        var error = er.json();
        this.service.message(error.message);
      });
    }

  }
  saveCache(username, password, checkpass) {

    this.storage.set('userLogin', {
      userName: username,
      password: password,
      check: checkpass,
    })
      .then(
        () => {
          console.log('Save cache success')
        },
        error => console.error('Error storing item', error)
      );
  }
  password_type: string = "password";
  toggleTextPassword() {
    this.password_type = this.password_type == 'text' ? 'password' : 'text';
  }

  isLoggedIn = false;
  users = {
    id: '',
    name: '',
    email: '',
    picture: {
      data: {
        url: ''
      }
    }
  };
  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        debugger
        console.log(res);
        if (res.status === 'connected') {
          this.fb.logout()
            .then(res => {
              debugger
              this.isLoggedIn = false
            })
            .catch(e => {
              debugger
              console.log('Error logout from Facebook', e)
            });
          this.getUserDetail(res);
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
  getUserDetail(res) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    var body = { fbAccessToken: res.authResponse.accessToken };
    this.service.postAPILogin1(this.service.getHost() + 'auth/fb/exchangeToken', body)
      .subscribe(result => {
        var rs = result.json();
        this.service.tokenId = rs.accessToken;
        this.service.postGet(this.service.getHost() + 'users/me').subscribe
          (rs => {
            var result = rs.json();
            if (result.isVerified == false) {
              this.service.message("Bạn cần kích hoạt tài khoản qua email để có thể tiếp tục sử dụng ứng dụng A365. Nếu bạn không thấy email, vui lòng kiểm tra hòm thư rác trước khi gửi lại email kích hoạt")
            }
            else {
              this.service.Role = result.role;
              this.service.profile = result.profile;
              this.service.address = result.profile.address;
              this.service.area = result.profile.area;
              this.service.areaOrder = result.profile.areaOrder;
              this.service.birthYear = result.profile.birthYear;
              this.service.createdAt = result.profile.createdAt;
              this.service.district = result.profile.district;
              this.service.email = result.profile.email;
              this.service.ethnic = result.profile.ethnic;
              this.service.gender = result.profile.gender;
              this.service.id = result.profile.id;
              this.service.isDeleted = result.profile.isDeleted;
              this.service.job = result.profile.job;
              this.service.name = result.profile.name;
              this.service.phoneNumber = result.profile.phoneNumber;
              this.service.pid = result.profile.pid;
              this.service.referSource = result.profile.referSource;
              this.service.updatedAt = result.profile.updatedAt;
              this.service.user = result.profile.user;
              this.service.ward = result.profile.ward;
              this.service.workplace = result.profile.workplace;
              this.saveCache(
                this.txtEmail,
                this.txtPassword,
                this.checkpass,
              );
              // if (result.role == 1) {
              //   this.navCtrl.navigateRoot('/doashboadparent');
              // }
              // else if (result.role == 2) {
              //   this.navCtrl.navigateRoot('/dashboard');
              // }
              // else {
              //   this.navCtrl.navigateRoot('/dashboadteacher');
              // }
              this.navCtrl.navigateRoot('/trangcuatoi');
            }
          }, error => {
            if (this.service.CheckLoading) {
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          });
      }, er => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        var error = er.json();
        this.service.message(error.message);
      });
  }
  checkSendMail = false;
  async sendmail() {
    if (!this.checkSendMail) {
      this.checkSendMail = true; {
        const myModal = await this.modalController.create({
          component: SendmailActivatedPage,
          componentProps: {
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
}