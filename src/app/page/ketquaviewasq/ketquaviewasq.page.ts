import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/providers/service.service';
import { NavController } from '@ionic/angular';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-ketquaviewasq',
  templateUrl: './ketquaviewasq.page.html',
  styleUrls: ['./ketquaviewasq.page.scss'],
})
export class KetquaviewasqPage implements OnInit {
  Data: any;
  answersheets: any;
  constructor(
    private service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.service.Page = "ketqua";
    this.service.backPage = this.Data.pageKQ;
    this.Getquestionmchatr();
  }

  ionViewDidEnter(){
    this.service.Page = "ketqua";
  }
  ngOnInit() {
  }
  Getquestionmchatr() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + 'asq/answersheets/' + this.Data + '/pdf').subscribe
        (rs1 => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.answersheets = rs1.json();
          this.toast.showToast;
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
