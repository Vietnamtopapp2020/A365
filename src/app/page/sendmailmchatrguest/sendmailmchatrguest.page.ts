import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, Platform, NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
@Component({
  selector: 'app-sendmailmchatrguest',
  templateUrl: './sendmailmchatrguest.page.html',
  styleUrls: ['./sendmailmchatrguest.page.scss'],
})
export class SendmailmchatrguestPage implements OnInit {
  Email: '';
  data: any

  FORGOTPASSWORD_EMAIL = "Nhập Email";
  ;
  notifi = [{
    text: "Gửi thành công vui lòng kiểm tra mail."
  }]
  public email
  language: any;
  constructor(public modalCtrl: ModalController,
    private service: ServiceService,
    public toast: ToastServiceService,
    public navParams: NavParams,
    public netWork: Network
  ) {
    this.data = this.navParams.data;
  }

  ngOnInit() {
  }
  backPage() {
    this.modalCtrl.dismiss();
  }
  Sendemail() {
    var body = {
      "email": this.email,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionCDC(this.service.getHost() + 'mchatr/guest/answersheets/' + this.data.createdId + '/pdfToMail', body).subscribe
        (rs => {
          var result = rs.json();
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message(this.notifi[0].text);
          this.modalCtrl.dismiss();
        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var er = error.json();
          this.service.message(er.message);
        });
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  };
}
