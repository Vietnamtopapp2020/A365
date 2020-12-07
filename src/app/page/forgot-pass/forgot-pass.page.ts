import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  email = "";
  constructor(
    public service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    this.service.Page = "";
  }

  ngOnInit() {
  }
  Forgotpassword() {
    var body = {
      "email": this.email,
      "recaptcha": '',
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionCDC(this.service.getHost() + 'auth/sendResetPasswordMail', body).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var result = rs.json();
          this.service.message("Hướng dẫn đã được gửi đến email của bạn. Hãy kiểm tra hộp thư");
          this.navCtrl.pop();
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var er = error.json();
          this.service.message(er.message);
        });
    }else{
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  backPage() {
    this.navCtrl.pop();
  }
}
