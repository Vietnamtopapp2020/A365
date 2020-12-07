import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { UpdateprofilestaffPage } from '../updateprofilestaff/updateprofilestaff.page';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.page.html',
  styleUrls: ['./dangki.page.scss'],
})
export class DangkiPage {
  dangkiarray = [];
  arrayuser = [];
  txtEmail = "";
  txtPassword = "";
  txtPasswordregister = "";
  checkBox = false;
  txtRole = "0";
  ERROR1 = "Vui lòng nhập đầy đủ email";
  notifi = [{
    text: "Đăng ký thành công"
  }]
  listRole = [
    { role: 1, text: "Phụ huynh", img: "assets/icon/PhuHuynh.png" },
    { role: 2, text: "Chuyên gia", img: "assets/icon/YTe.png" },
    { role: 3, text: "Giáo viên", img: "assets/icon/GiaoVien.png" }
  ]
  Step1 = true;
  Step2 = false;
  CheckEvent = false;

  constructor(
    public navCtrl: NavController,
    public service: ServiceService,
    public router: Router,
    public toast: ToastServiceService,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public netWork: Network
  ) {
    this.service.Page = "";

  }
  async moveTofirstStaff(id) {
    const myModal = await this.modalCtrl.create({
      component: UpdateprofilestaffPage,
      componentProps: {
        txtEmail: this.txtEmail,
        id: id
      },
      cssClass: "modalmessscStaff"
    });
    myModal.onDidDismiss().then(rs => {
      this.navCtrl.pop();
    });
    return await myModal.present();
  }

  registerUser() {

    if (this.txtEmail == "") {
      this.service.message("Vui lòng nhập Email đăng ký")
    }
    else if (this.txtPassword != this.txtPasswordregister) {
      this.service.message("Xác nhận mật khẩu không trùng khớp")
    }
    else if (this.checkBox == false) {
      this.service.message("Vui lòng xác nhận đồng ý các điều khoản")
    }
    else if (this.txtRole == "0") {
      this.service.message("Vui lòng chọn vai trò của bạn")
    }
    else if (this.txtPassword.length < 6) {
      this.service.message("Mật khẩu lớn hơn 6 ký tự")
    }
    else {
      if (!this.service.CheckLoading) {
        this.toast.showLoading("");
        this.service.CheckLoading = true;
      }
      var body = {
        "email": this.txtEmail,
        "password": this.txtPassword,
        "register": this.txtPasswordregister,
        "role": parseInt(this.txtRole),
      };
      if (this.netWork.type.toUpperCase() != "NONE") {
        this.service.postAPIregister(this.service.getHost() + 'auth/register', body).subscribe(rs => {
          var result = rs.json();
          this.service.tokenId = result.accessToken;
          this.service.message("Đăng ký thành công. Vui lòng cập nhập thông tin!")
          this.service.postPushNotification(this.service.getHost() + 'users/me').subscribe(
            rs1 => {

              var result1 = rs1.json();
              this.service.id = result1.id;
              this.service.Role = parseInt(this.txtRole);
              if (parseInt(this.txtRole) == 1 || parseInt(this.txtRole) == 3) {
                this.moveTofirstStaff(result1._id);
              }
              if (parseInt(this.txtRole) == 2) {
                this.moveTofirstStaff(result1._id);
              }
              if (this.service.CheckLoading) {
                this.service.CheckLoading = false;
                this.toast.DismissToast();
              };
            }
          )
        }, er => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var error = er.json();
          this.service.message(error.message);
        });
      }else{
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        this.service.message("Vui lòng kiểm tra đường truyền internet!");
      }
    }

  }
  NextStep() {
    if (this.txtEmail == "") {
      this.service.message("Vui lòng nhập Email đăng ký")
    }
    else if (this.txtPassword.length < 6) {
      this.service.message("Mật khẩu lớn hơn 6 ký tự")
    }
    else if (this.txtPassword != this.txtPasswordregister) {
      this.service.message("Xác nhận mật khẩu không trùng khớp")
    }
    else if (this.checkBox == false) {
      this.service.message("Vui lòng xác nhận đồng ý các điều khoản")
    }
    else {
      this.Step1 = false;
      this.Step2 = true;
    }
  }
  backPage() {
    this.navCtrl.navigateRoot('/login');
  }
  dangnhap() {
    this.router.navigate(['/login'])
  }
  SelectRole(role) {

    this.txtRole = role
  }
  backPageStep() {
    this.Step2 = false;
    this.Step1 = true;
  }
  Dieukhoan() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: "dieukhoan"
      }
    };
    this.router.navigate(['/dangky-chinhsach'], navigationExtras);
  }
  Baomat() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: "BaoMat"
      }
    };
    this.router.navigate(['/dangky-chinhsach'], navigationExtras);
  }
}
