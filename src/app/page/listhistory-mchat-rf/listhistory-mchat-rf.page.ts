import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-listhistory-mchat-rf',
  templateUrl: './listhistory-mchat-rf.page.html',
  styleUrls: ['./listhistory-mchat-rf.page.scss'],
})
export class ListhistoryMchatRFPage implements OnInit {
  childrenlist = [];
  kqasq: any[];
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
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.service.Page = "";
    this.skip = 0;
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.childrenlist = [];
    this.GetpostMchatRF();
  }
  GetpostMchatRF() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/answersheets?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe
        (rs => {
          var result = rs.json();
          result.items.forEach(element => {
            var imgIcon = "";
            var genderName = "";
            var Status = "";
            var complete = "";
            var diagnosticConclusion = "";
            var randon = element.child.cid % 6;
            if (element.child.gender == 'male') {
              imgIcon = "assets/icon/iconchilmale" + randon + ".png";
              genderName = "Nam";
            }
            else {
              imgIcon = "assets/icon/iconchilfemale" + randon + ".png";
              genderName = "Nữ"
            }
            this.DC.forEach(item => {
              if (item.id == element.child.diagnosticConclusion) {
                diagnosticConclusion = item.text;
              }
            });
            if (element.isCompleted == true) {
              complete = "Xem lại";
              Status = "Đã xong";
            }
            else {
              complete = "Tiếp tục";
              Status = "Chưa xong";
            }
            let newDate = moment(element.createdAt).format("DD/MM/YYYY HH:mm");
            this.childrenlist.push({
              createId: element._id,
              isCompleted: element.isCompleted,
              complete: complete,
              Status: Status,
              name: element.child.name,
              dob: element.child.dob,
              gender: element.child.gender,
              genderName: genderName,
              parentName: element.child.parentName,
              pregnantWeeks: element.child.pregnantWeeks,
              isDiagnosed: element.child.isDiagnosed,
              complementaryConclusion: element.child.complementaryConclusion,
              diagnosticConclusion: diagnosticConclusion,
              diagnosticPlace: element.child.diagnosticPlace,
              diagnosticStaff: element.child.diagnosticStaff,
              ageWhenDiagnosed: element.child.ageWhenDiagnosed,
              screenedOnA365: element.child.screenedOnA365,
              user: element.child.user,
              profile: element.child.profile,
              pid: element.child.pid,
              createdAt: newDate,
              updatedAt: element.child.updatedAt,
              cid: element.child.cid,
              createdOrder: element.child.createdOrder,
              birthDate: element.child.birthDate,
              ageInMonths: element.child.ageInMonths,
              adjustedAgeInMonths: element.child.adjustedAgeInMonths,
              isEligibleForAsq: element.isEligibleForAsq,
              isEligibleForCdc: element.child.isEligibleForCdc,
              isEligibleForMchatr: element.child.isEligibleForMchatr,
              isEligibleForIntervention: element.child.isEligibleForIntervention,
              isEligibleForAtec: element.child.isEligibleForAtec,
              isEligibleForQol: element.child.isEligibleForQol,
              id: element.child.id,
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
  MCHATRFpost(data) {
    if (data.isCompleted) {
      let navigationExtras: NavigationExtras = {
        queryParams:
        {
          createdId: data.createId,
          pageKQ: "/listhistory-mchat-rf"
        }
      };
      this.router.navigate(['/ketquamchatrf'], navigationExtras);
    }
    else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          createdId: data.createId,
          childId: data.id,
          pageKQ: "/listhistory-mchat-rf"
        }
      };
      this.router.navigate(['/update-mchat-rf'], navigationExtras);
    }

  }
  backPage() {
    this.router.navigate(['/history'])
  }
  Addchilren() {
    this.router.navigate(['/createchildren']);
  }
  doRefresh(event) {
    this.skip = 0;
    this.childrenlist = []
    this.GetpostMchatRF();
    event.target.complete();
  }
  loadData(event) {
    this.skip = this.skip + 10;
    this.GetpostMchatRF();
    event.target.complete();
  }
}
