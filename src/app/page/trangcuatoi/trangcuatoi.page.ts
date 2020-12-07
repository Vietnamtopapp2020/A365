import { Component } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ModalController, NavController, MenuController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import * as moment from 'moment';


@Component({
  selector: 'app-trangcuatoi',
  templateUrl: './trangcuatoi.page.html',
  styleUrls: ['./trangcuatoi.page.scss'],
})
export class TrangcuatoiPage {
  CheckControl = false;
  checkCloseApp = false;
  checkModal = true;
  listNotification = [];
  constructor(
    public service: ServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public toast: ToastServiceService,
    public platform: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.menuCtrl.enable(true);
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        if (this.service.Page == "ketqua") {
          this.router.navigate([this.service.backPage])
        }
        else if (this.checkCloseApp) {
          navigator['app'].exitApp();
        }
        else {
          this.checkCloseApp = true;
          this.service.message("Nhấn lần nữa để thoát");
          setTimeout(() => {
            this.checkCloseApp = false;
          }, 2000);
        }
      }
    });

    this.service.PlatFormData = this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      if (this.service.Page == "followup") {
        this.service.message("Vui lòng trả lời câu hỏi");
      }
      else if (this.service.Page == "ketqua") {
        this.router.navigate([this.service.backPage])
      }
      else if (this.service.Page == "postTest") {
        this.backpage();
      }
      else if (this.service.Page == "dashboard" || this.service.Page == "trangcuatoi" || this.service.Page == "trangchu") {
        if (!this.routerOutlet.canGoBack()) {
          if (this.checkCloseApp) {
            navigator['app'].exitApp();
          }
          else {
            this.checkCloseApp = true;
            this.service.message("Nhấn lần nữa để thoát");
            setTimeout(() => {
              this.checkCloseApp = false;
            }, 2000);
          }
        }
      }
      else {
        
        this.navCtrl.pop();
      }
    });
  }
  ionViewDidEnter() {
    this.service.Page = "trangcuatoi";
    this.service.PackRoot = "trangcuatoi";
    this.GetNotification();
  }
  async openMenuPage(p) {
    this.service.openMenuPage(p);
  }
  async backpage() {

    var mess = "";
    if (this.service.total == 0) {
      mess = "Bài làm sẽ tự động bị xóa nếu bạn thoát và không trả lời câu nào. Bạn có chắc chắn muốn thoát?"
    }
    else {
      mess = "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
    }
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: mess
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          if (this.service.total == 0) {
            this.DeletePostTest();
          }
          this.router.navigate([this.service.backPage])
        }
      });
      return await myModal.present();
    }
  }
  DeletePostTest() {
    this.service.postAPIDelete(this.service.getHost() + this.service.ApiDeleteTest + this.service.PostTestId).subscribe
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
      });
  }
  ///// data trang
  GetNotification() {
    var time = moment(new Date).utc().format("YYYY-MM-DDTHH:mm").toString();
    this.service.GetanswersheetsCDC(this.service.getHost() + 'notification/mine?size=3&prior=' + time + ':00Z').subscribe(result => {
      var rs = result.json();
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.listNotification = rs;
    }, error => {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
    });

  }
  OpenHosoTre() {
    this.router.navigate(["/danhsachtre"]);
  }
  OpenTheodoiphattrien() {
    this.CheckControl = !this.CheckControl;
  }
  Openthuchanhcanthiep() {
    let navigationExtras: NavigationExtras = {
      queryParams: null
    };
    this.router.navigate(['/nhatkycanthiep'], navigationExtras);
  }
  Openlichsubailam() {
    this.router.navigate(["/history"]);
  }
  onSwipeLeft() {
    this.CheckControl = false;
  }
  onSwipeRight() {
    this.CheckControl = true;
  }
  OpenQOL() {
    this.router.navigate(['/listchildren-qol']);
  }
  ListchildrenCDC() {
    this.router.navigate(['/listchildren-cdc']);
  }
  ListchildrenASQ() {
    this.router.navigate(['/list-children-asq']);
  }
  ListchildrenMCHATRF() {
    this.router.navigate(['/listchildrenmchatrf']);
  }
  ListchildrenMCHATR() {
    this.router.navigate(['/listchildren']);
  }
  OpenMchart() {
    if (this.service.Role == 1 || this.service.Role == 3) {
      this.router.navigate(['/listchildren']);
    }
    else if (this.service.Role == 2) {
      this.router.navigate(['/listchildrenmchatrf']);
    }
  }
}
