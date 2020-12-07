import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-list-childen-atec',
  templateUrl: './list-childen-atec.page.html',
  styleUrls: ['./list-childen-atec.page.scss'],
})
export class ListChildenAtecPage {
  childrenlist = [];
  answersheetsid: any[];
  getlistquestion: any[];
  txtname: string;
  txtdob: number;
  txtgender: string;
  txtparentName: string;
  txtpregnantWeeks: number;
  txtisDiagnosed: boolean;
  txtdiagnosticConclusion: string;
  txtcomplementaryConclusion: string;
  txtageWhenDiagnosed: number;
  txtdiagnosticPlace: string;
  txtdiagnosticStaff: string;
  txtscreenedOnA365: boolean;
  diagnosticPlace: [];
  skip = 0;
  take = 10;
  query = "";
  sort = "";
  childid = "";
  id = '';
  searchCheck = false;
  check = '';
  notifi = [{
    text: "trẻ không đủ điều kiện để làm bài test"
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
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public modalCtrl: ModalController,
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
  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'children?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe
        (rs => {
          var result = rs.json();
          result.items.forEach(element => {
            var checkTestATEC = false;
            for (var i = 0; i < this.DC.length; i++) {
              if (element.diagnosticConclusion == this.DC[i].id) {
                checkTestATEC = true;
                break;
              }
            }
            if (checkTestATEC == true) {
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
              });
            }

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
  Search() {
    this.txtname = "";

  }
  backPage() {
    if(this.service.Role == 1){
      // this.router.navigate(['/doashboadparent'])
      this.router.navigate(["/trangcuatoi"])
    }
    else if(this.service.Role == 2)
    {
      // this.router.navigate(['/dashboard'])
      this.router.navigate(["/trangcuatoi"])
    }
    else if(this.service.Role == 3){
      // this.router.navigate(['/dashboadteacher'])
      this.router.navigate(["/trangcuatoi"])
    }
    else{
      this.router.navigate(['/register'])
    }
  }

  deletechildren(data) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIDelete(this.service.getHost() + 'children/' + data.id)
        .subscribe(result => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var rs = result.json();
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

  ASQ(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ObjectPage: data,
        pageKQ: '/list-childen-atec'
      }
    };
    this.router.navigate(['/asqtest'], navigationExtras);
  }

  ATEC(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/atecview'], navigationExtras);
  }

  Update(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/updatechildren'], navigationExtras);
  }
  TestATEC(data) {

    var checkTestATEC = false;
    for (var i = 0; i < this.DC.length; i++) {
      if (data.diagnosticConclusion == this.DC[i].id) {
        checkTestATEC = true;
        break;
      }
    }
    if (checkTestATEC == true) {
      this.ATEC(data);
    }
    else {
      this.service.message("Trẻ không đủ điều kiện để làm bài test")
    }

  }


  ViewSearch() {
    if (this.searchCheck) {
      this.searchCheck = false;
      this.txtname = "";
    }
    else {
      this.searchCheck = true;
      this.txtname = "txtname";
    }
  }
  Addchilren() {
    this.router.navigate(['/createchildren']);
  }
  DeleteSearch() {
    this.txtname = "";
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
}
