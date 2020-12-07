import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { DashBoardP2Page } from '../dash-board-p2/dash-board-p2.page';
import { DashbpadparentP2Page } from '../dashbpadparent-p2/dashbpadparent-p2.page';
import { DashbpadteacherP2Page } from '../dashbpadteacher-p2/dashbpadteacher-p2.page';

@Component({
  selector: 'app-danhsachtre',
  templateUrl: './danhsachtre.page.html',
  styleUrls: ['./danhsachtre.page.scss'],
})
export class DanhsachtrePage implements OnInit {
  childrenlist = [];
  txtname = '';
  skip = 0;
  take = 10;
  query = "";
  searchCheck = false;
  notifi = [{
    text: "Xóa trẻ thành công"
  }]
  dc = [
    { id: "DC-3", text: " Theo dõi tự kỷ " },
    { id: "DC-1", text: " Rối loạn tự kỷ/Tự kỷ " },
    { id: "DC-4", text: " Rối loạn phát triển " },
    { id: "DC-2", text: " Rối loạn phát triển lan tỏa " },
    { id: "DC-5", text: " Chậm phát triển/ Theo dõi chậm phát triển " },
    { id: "DC-8", text: " Tăng động, giảm chú ý " },
    { id: "DC-9", text: " Rối loạn giao tiếp (chậm nói, ...) " },
    { id: "DC-6", text: " Trẻ phát triển bình thường " },
    { id: "DC-7", text: " Khác (ghi rõ) " },
  ]
  CheckControl = false;
  checkNhatky = false;
  ObjectPage = null;
  openTsetCheck = false;
  total = 0;
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public netWork: Network
  ) {
    this.service.Page = "";
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.Searchchildren();
  }
  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
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
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  Searchchildren() {
    this.skip = 0;
    this.childrenlist = [];
    this.GetCDR();
  }
  DeleteSearch() {
    this.txtname = "";
    this.skip = 0;
    this.childrenlist = [];
    this.GetCDR();
  }
  checkModal = true;
  async deletechildren(data) {
    if (this.checkModal) {
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
            if (!this.service.CheckLoading) {
              this.toast.showLoading("");
              this.service.CheckLoading = true;
            }
            this.service.postAPIDelete(this.service.getHost() + 'children/' + data.id)
              .subscribe(result => {
                if (this.service.CheckLoading) {
                  this.service.CheckLoading = false;
                  this.toast.DismissToast();
                };
                var rs = result.json();
                this.skip = 0;
                this.childrenlist = [];
                this.GetCDR();
                this.service.message(this.notifi[0].text);
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
      });
      return await myModal.present();

    }
  }
  Update(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/updatechildren'], navigationExtras);
  }
  Addchilren() {
    this.router.navigate(['/createchildren']);
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
  loadData(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = this.skip + 10;
    this.GetCDR();
    event.target.complete();
  }
  backpage() {
    this.navCtr.pop();
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
        var pageOpen = null;
        if (this.service.Role == 1) {
          pageOpen = DashbpadparentP2Page;
        }
        if (this.service.Role == 2) {
          pageOpen = DashBoardP2Page;
        }
        if (this.service.Role == 3) {
          pageOpen = DashbpadteacherP2Page
        }
        this.checkModal = false;
        const myModal = await this.modalCtrl.create({
          component: pageOpen,
          componentProps: {
            CheckControl: this.CheckControl,
            checkNhatky: this.checkNhatky,
            openTsetCheck: this.openTsetCheck,
            ObjectPage: this.ObjectPage,
            page : "/danhsachtre"
          }
        });
        myModal.onDidDismiss().then((rs) => {
          if (rs.data == "DELETE") {
            this.checkModal = true;
            this.checkNhatky = false;
            this.CheckControl = false;
            this.deletechildren(this.ObjectPage);
          }
          else {
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
  async onSwipeRight() {
    if (this.checkModal) {
      var pageOpen = null;
      if (this.service.Role == 1) {
        pageOpen = DashbpadparentP2Page;
      }
      if (this.service.Role == 2) {
        pageOpen = DashBoardP2Page;
      }
      if (this.service.Role == 3) {
        pageOpen = DashbpadteacherP2Page
      }
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: pageOpen,
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
  async openMenuPage(p) {
    this.service.openMenuPage(p);
  }
}
