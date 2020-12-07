import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, Platform, NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-updatepass',
  templateUrl: './updatepass.page.html',
  styleUrls: ['./updatepass.page.scss'],
})
export class UpdatepassPage implements OnInit {
  txtconfirmNewPassword: string;
  txtnewPassword: string;
  txtpassword: String;
  constructor(
    public modalCtrl: ModalController,
    private platform: Platform,
    private service: ServiceService,
    private navCtrl: NavController,
    public toast: ToastServiceService,
    public navParams: NavParams,
    public netWork: Network
  ) {
    this.service.Page = "";
  }

  ngOnInit() {
  }
  backPage() {
    this.modalCtrl.dismiss();
  }
  UpdatePass() {
    var body = {
      "confirmNewPassword": this.txtconfirmNewPassword,
      "newPassword": this.txtnewPassword,
      "password": this.txtpassword,
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'users/me/password/', body).subscribe
        (rs => {

          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.modalCtrl.dismiss();
        });
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
}
