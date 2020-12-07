import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/providers/service.service';
import { NavController } from '@ionic/angular';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-listchildren-cdc',
  templateUrl: './listchildren-cdc.page.html',
  styleUrls: ['./listchildren-cdc.page.scss'],
})
export class ListchildrenCDCPage implements OnInit {

  asqDetails = [];
  childrenlist = [];
  getlistquestion = [];
  skip = 0;
  take = 10;
  query = "";
  notifi = [{
    text: "Trẻ không đủ điều kiện để làm bài test"
  }]
  DC = [
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
  constructor(
    private service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.service.Page = "";

    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.GetCDR();
  }
  ngOnInit(): void {

  }
  backPage() {
    this.navCtrl.pop();
    // this.router.navigate(['/dashboard']);
  }

  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + 'children/mine/cdcEligible?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe
        (rs => {
          var result = rs.json();
          result.items.forEach(element => {
            var imgIcon = "";
            var genderName = "";
            var diagnosticConclusion = "";
            var randon = element.cid % 6;
            if (element.gender == 'male') {
              imgIcon = "assets/icon/iconchilmale" + randon + ".png";
              genderName = "Nam";
            }
            else {
              imgIcon = "assets/icon/iconchilfemale" + randon + ".png";
              genderName = "Nữ"
            }
            this.DC.forEach(item => {
              if (item.id == element.diagnosticConclusion) {
                diagnosticConclusion = item.text;
              }
            });
            this.childrenlist.push({
              name: element.name,
              dob: element.dob,
              gender: element.gender,
              genderName: genderName,
              parentName: element.parentName,
              pregnantWeeks: element.pregnantWeeks,
              isDiagnosed: element.isDiagnosed,
              complementaryConclusion: element.complementaryConclusion,
              diagnosticConclusion: diagnosticConclusion,
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
            })
          });
          if (this.childrenlist.length == 0) {
            this.service.message("Không tìm thấy kết quả nào!");
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
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  DeleteSearch() {
    this.query = "";
    this.childrenlist = [];
    this.GetCDR();
  }
  Searchchildren() {
    this.skip = 0;
    this.childrenlist = [];
    this.GetCDR();
  }
  doRefresh(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = 0;
    this.childrenlist = []
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
  CDC(data) {
    let created = new Date(data.birthDate.year, data.birthDate.month, data.birthDate.day);
    let now = new Date();
    let diffMs = now.getTime() - created.getTime();
    let diffDay = Math.floor((diffMs / 86400000))
    if (diffDay >= 30 && diffDay <= 1350) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: data,
          page: "/listchildren-cdc"
        }
      };
      this.router.navigate(['/cdc'], navigationExtras);
    }
    else {
      this.service.message(this.notifi[0].text);
    }
  }

  Addchilren() {
    this.router.navigate(['/createchildren']);
  }
}