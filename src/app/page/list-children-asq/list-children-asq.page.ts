import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-list-children-asq',
  templateUrl: './list-children-asq.page.html',
  styleUrls: ['./list-children-asq.page.scss'],
})
export class ListChildrenAsqPage implements OnInit {
  childrenlist = [];
  answersheetsid: any[];
  getlistquestion: any[];
  searchchildren: any[];
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
  ngOnInit() {

  }

  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + 'children/mine/asqEligible?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe
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

  ASQ(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ObjectPage: data,
        pageKQ: '/list-children-asq'
      }
    };
    this.router.navigate(['/asqtest'], navigationExtras);

  }
  Addchilren() {
    this.router.navigate(['/createchildren']);
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
