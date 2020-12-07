import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ModalController, NavController, MenuController, Platform, IonRouterOutlet, } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { DashBoardP2Page } from '../dash-board-p2/dash-board-p2.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],

})
export class DashboardPage implements OnInit {
  page = "dashboard";
  dc = [
    { id: "DC-3", text: " Theo dõi tự kỷ " },
    { id: "DC-1", text: " Rối loạn tự kỷ/Tự kỷ " },
    { id: "DC-4", text: " Rối loạn phát triển " },
    { id: "DC-2", text: " Rối loạn phát triển lan tỏa " },
    { id: "DC-5", text: " Chậm phát triển/ Theo dõi chậm phát triển " },
    { id: "DC-8", text: " Tăng động, giảm chú ý " },
    { id: "DC-9", text: " Rối loạn giao tiếp (chậm nói,...) " },
    { id: "DC-6", text: " Trẻ phát triển bình thường " },
    { id: "DC-7", text: " Khác (ghi rõ) " },
  ]
  skip = 0;
  take = 10;
  txtname = "";
  childrenlist = [];
  total = 0;
  openTsetCheck = false;
  ObjectPage = null;
  checkNhatky = false;
  CheckControl = true;
  checkCloseApp = false;
  constructor(
    public service: ServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public toast: ToastServiceService,
    public platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public netWork: Network
  ) {
    this.service.Page = "dashboard";
    this.platform.backButton.subscribeWithPriority(-1, () => {
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
      else if (this.service.Page == "dashboard") {
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
    this.GetCDR();
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.service.Page = "dashboard";
    this.menuCtrl.enable(true);
    this.checkCloseApp = false;
    // this.skip = 0;
    // this.childrenlist = [];
    this.ObjectPage = null;
    this.CheckControl = false;
    // this.GetCDR();
  }
  loadData(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = this.skip + 10;
    this.GetCDR();
    event.target.complete();
  }
  GetCDR() {
    this.service.GetanswersheetsMchartR(this.service.getHost() + 'children?skip=' + this.skip + '&take=' + this.take + '&query=' + this.txtname).subscribe
      (rs => {
        var result = rs.json();
        this.total = result.total;
        if (result.total == 0) {
          this.service.message("Không tìm thấy kết quả nào!");
        }
        else {
          result.items.forEach(element => {

            var imgIcon = "";
            var genderName = "";
            var diagnosticConclusionText = "";
            var randon = element.cid % 6;
            if (element.gender == 'male') {
              imgIcon = "assets/icon/iconchilmale" + randon + ".png";
              genderName = "Nam";
            }
            else {
              imgIcon = "assets/icon/iconchilfemale" + randon + ".png";
              genderName = "Nữ"
            }
            if (element.diagnosticConclusion != undefined) {
              this.dc.forEach(item => {
                if (item.id == element.diagnosticConclusion) {
                  diagnosticConclusionText = item.text;
                }
              });
            }
            this.childrenlist.push({
              name: element.name,
              dob: element.dob,
              gender: element.gender,
              genderName: genderName,
              parentName: element.parentName,
              pregnantWeeks: element.pregnantWeeks,
              isDiagnosed: element.isDiagnosed,
              complementaryConclusion: element.complementaryConclusion,
              diagnosticConclusion: element.diagnosticConclusion,
              diagnosticConclusionText: diagnosticConclusionText,
              diagnosticPlace: element.diagnosticPlace,
              diagnosticStaff: element.diagnosticStaff,
              ageWhenDiagnosed: element.ageWhenDiagnosed,
              screenedOnA365: element.screenedOnA365,
              user: element.user,
              profile: element.profile,
              pid: element.pid,
              createdAt: element.createdAt,
              updatedAt: element.updatedAt,
              cid: element.cid,
              createdOrder: element.createdOrder,
              birthDate: element.birthDate,
              ageInMonths: element.ageInMonths,
              adjustedAgeInMonths: element.adjustedAgeInMonths,
              isEligibleForAsq: element.isEligibleForAsq,
              isEligibleForCdc: element.isEligibleForCdc,
              isEligibleForMchatr: element.isEligibleForMchatr,
              isEligibleForIntervention: element.isEligibleForIntervention,
              isEligibleForAtec: element.isEligibleForAtec,
              isEligibleForQol: element.isEligibleForQol,
              id: element.id,
              imgIcon: imgIcon,
              checkSelect: false
            })
          });
        }
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
  DeleteSearch() {
    this.txtname = "";
    this.childrenlist = [];
    this.GetCDR();
  }
  doRefresh(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = 0;
    this.childrenlist = [];
    this.GetCDR();
    event.target.complete();
  }
  Searchchildren() {
    this.skip = 0;
    this.childrenlist = [];
    this.GetCDR();
  }
  async SelectChild(data) {
    if (!data.checkSelect) {
      this.CheckControl = true;
      data.checkSelect = true;
      if (data.diagnosticConclusion != undefined) {
        this.checkNhatky = true;
      }
      else {
        this.checkNhatky = false;
      }
      this.ObjectPage = data;
      this.childrenlist.forEach(element => {
        if (data.id != element.id)
          element.checkSelect = false;
      });
      if (data.diagnosticConclusion == undefined) {
        this.openTsetCheck = true;
      }
      else {
        this.openTsetCheck = false;
      }
      if (this.checkModal) {
        this.checkModal = false;
        const myModal = await this.modalCtrl.create({
          component: DashBoardP2Page,
          componentProps: {
            CheckControl: this.CheckControl,
            checkNhatky: this.checkNhatky,
            openTsetCheck: this.openTsetCheck,
            ObjectPage: this.ObjectPage
          }
        });
        myModal.onDidDismiss().then((rs) => {
          this.childrenlist.forEach(element => {
            element.checkSelect = false;
          });
          this.checkModal = true;
          this.checkNhatky = false;
          this.ObjectPage = null;
          this.CheckControl = false;
          if (rs.data) {
            this.skip = 0;
            this.childrenlist = [];
            this.GetCDR();
          }
        });
        return await myModal.present();
      }

    }
    else {
      data.checkSelect = false;
      this.checkNhatky = false;
      this.ObjectPage = null;
      this.CheckControl = false;
    }
  }
  ListchildrenCDC() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          page: "/dashboard"
        }
      };
      if (this.ObjectPage.isEligibleForCdc == true) {
        this.router.navigate(['/cdc'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.router.navigate(['/listchildren-cdc']);
    }
  }
  ListchildrenASQ() {

    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          pageKQ: '/trangcuatoi'
        }
      };
      if (this.ObjectPage.isEligibleForAsq == true) {
        this.router.navigate(['/asqtest'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.router.navigate(['/list-children-asq']);
    }
  }
  ListchildrenATEC() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.ObjectPage
      };
      if (this.ObjectPage.isEligibleForAtec == true) {
        this.router.navigate(['/atecview'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }
    }
    else {
      this.router.navigate(['/list-childen-atec']);
    }
  }
  ListchildrenMCHATRF() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          pageKQ: '/dastrangcuatoihboard'
        }
      };
      if (this.ObjectPage.isEligibleForMchatr == true) {
        this.router.navigate(['/mchatr-f'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.router.navigate(['/listchildrenmchatrf']);
    }
  }
  Nhatky() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.ObjectPage
    };
    this.router.navigate(['/nhatkycanthiep'], navigationExtras);

  }
  Addchilren() {
    this.router.navigate(['/createchildren']);
  }
  OpenHistory() {
    this.router.navigate(["/history"]);
  }
  async openMenuPage(p) {
    this.service.openMenuPage(p);
  }
  OpenControll() {
    this.CheckControl = !this.CheckControl;
  }
  Update() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.ObjectPage
    };
    this.router.navigate(['/updatechildren'], navigationExtras);
  }
  checkModal = true;
  async deletechildren() {
    if (this.checkModal) {
      if (!this.service.CheckLoading) {
        this.toast.showLoading("");
        this.service.CheckLoading = true;
      }
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Bạn có muốn xóa trẻ này!"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          if (this.netWork.type.toUpperCase() != "NONE") {
            this.service.postAPIDelete(this.service.getHost() + 'children/' + this.ObjectPage.id)
              .subscribe(result => {
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
                var rs = result.json();
                this.skip = 0;
                this.childrenlist = [];
                this.GetCDR();
                this.CheckControl = false;
                this.ObjectPage = null;
                this.service.message("Xóa trẻ thành công!");
              }, error => {
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
              });
          } else {
            this.service.message("Vui lòng kiểm tra đường truyền internet!");
            if (this.service.CheckLoading) {
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          }
        }
      });
      return await myModal.present();

    }
  }
  onSwipeLeft($event) {
    setTimeout(() => {
      this.CheckControl = false;
    }, 500);
  }
  // async onSwipeRight($event) {
  async onSwipeRight() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: DashBoardP2Page,
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        this.checkNhatky = false;
        this.ObjectPage = null;
        this.CheckControl = false;
      });
      return await myModal.present();
    }
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
}
