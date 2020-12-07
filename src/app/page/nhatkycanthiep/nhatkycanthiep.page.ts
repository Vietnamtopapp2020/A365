import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router'
import * as moment from 'moment';
import { IonicSelectableComponent } from 'ionic-selectable';
import { NhatkycanthiepWorkPage } from '../nhatkycanthiep-work/nhatkycanthiep-work.page';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-nhatkycanthiep',
  templateUrl: './nhatkycanthiep.page.html',
  styleUrls: ['./nhatkycanthiep.page.scss'],
})
export class NhatkycanthiepPage implements OnInit {
  childrenlist = [];
  skip = 0;
  take = 10;
  query = "";
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
  sltChild = null;
  listWorkChild = [];
  listTree = [];
  listInterventionActivities = [];
  checkopen = false;
  searchCheck = false;
  cssObj = "";
  cssObj1 = "";
  cssObj2 = "";
  cssOpen = "";
  cssOpen1 = "";
  cssOpen2 = "";
  checkview = false;
  checkview1 = false;
  checkview2 = false;
  data = null;
  constructor(
    public navCtr: NavController,
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
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetCDR();

  }
  ngOnInit() {
  }
  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + 'children/mine/interventionEligible?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe(rs => {
        var result = rs.json();
        result.items.forEach(element => {
          var imgIcon = "";
          var genderName = "";
          var diagnosticConclusion = "";
          this.DC.forEach(item => {
            if (item.id == element.diagnosticConclusion) {
              diagnosticConclusion = item.text;
            }
          });
          this.childrenlist.push({
            childid: element._id,
            name: element.name,
            dob: element.dob,
            gender: element.gender,
            genderName: genderName,
            parentName: element.parentName,
            pregnantWeeks: element.pregnantWeeks,
            isDiagnosed: element.isDiagnosed,
            diagnosticConclusion: diagnosticConclusion,
            diagnosticPlace: element.diagnosticPlace,
            diagnosticStaff: element.diagnosticStaff,
            ageWhenDiagnosed: element.ageWhenDiagnosed,
            screenedOnA365: element.screenedOnA365,
            user: element.user,
            profile: element.profile,
            pid: element.pid,
            cid: element.cid,
            birthDate: element.birthDate,
            id: element.id,
            imgIcon: imgIcon,
            viewSearch: element.name + "(" + element.birthDate.day + "-" + element.birthDate.month + "-" + element.birthDate.year + ")"
          });

        });

        if (this.childrenlist.length != 0) {
          if (this.data != null) {
            this.childrenlist.forEach(element => {
              if (this.data.id == element.id) {
                this.sltChild = element;
                this.GetPostTree();
              }
            });
          }
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
  getMorePorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    this.skip = this.skip + 1;
    this.GetCDR();
    event.component.endInfiniteScroll();
  }

  searchPorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    this.query = event.text.trim().toLowerCase();
    this.skip = 0;
    this.childrenlist = []
    this.GetCDR();
    event.component.endSearch();
  }
  ChildChange(event: { component: IonicSelectableComponent, value: any }) {
    this.GetPostTree();
  }
  GetPostTree() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "intervention/postTree").subscribe(rs => {
        var result = rs.json();
        this.listTree = []
        result[0].children.forEach(element => {
          this.listTree.push({
            id: element.id,
            key: element.key,
            order: element.order,
            parent: element.parent,
            slug: element.slug,
            title: element.title,
            InterventionData: null,
            interveningLevel: "",
            interveningLevelCheck: "",
            activityId: ""
          })
        });
        this.GetInterventionActivities();
        this.GetActivities();
      }, error => {
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
  GetActivities() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "intervention/activities/" + this.sltChild.id + "/completed?take=10&").subscribe(rs => {
        var result = rs.json();
        this.service.postGet(this.service.getHost() + "intervention/activities/" + this.sltChild.id + "/completed?take=" + result.total + "&").subscribe(rs1 => {
          var result1 = rs1.json();
          this.listWorkChild = result1.items
        }, error => {
          this.toast.showToast;
        });
      }, error => {
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
  checkOpenWork = true;
  async OpenWork(data) {
    if (this.checkOpenWork) {
      this.checkOpenWork = false;

      const myModal = await this.modalCtrl.create({
        component: NhatkycanthiepWorkPage,
        componentProps: {
          data: data,
          childerId: this.sltChild.id
        },
        cssClass: "modalMeetingZoom"
      });
      myModal.onDidDismiss().then(rs => {
        this.GetPostTree();
        this.checkOpenWork = true;

      });
      return await myModal.present();
    }
  }
  GetInterventionActivities() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + "intervention/activities/" + this.sltChild.id).subscribe(rs => {
        this.listInterventionActivities = rs.json();
        this.listTree.forEach(element => {
          for (var i = 0; i < this.listInterventionActivities.length; i++) {
            if (this.listInterventionActivities[i].isCurrentTarget) {
              if (this.listInterventionActivities[i].interventionPost.topic == element.id) {
                element.InterventionData = this.listInterventionActivities[i].interventionPost;
                if (this.listInterventionActivities[i].interveningLevel == 1) {
                  element.interveningLevel = 1;
                  element.interveningLevelCheck = 1;

                }
                else if (this.listInterventionActivities[i].interveningLevel == 2) {
                  element.interveningLevel = 2;
                  element.interveningLevelCheck = 3;
                }
                element.activityId = this.listInterventionActivities[i]._id;
                break;
              }
            }
          }
        });
      }, error => {
      });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  Check = true;
  async CheckinterveningLevel(data, interveningLevel) {

    if (interveningLevel == 3) {
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Hoạt động can thiệp sẽ được chuyển xuống bảng hoạt động đã hoàn thành, bạn có chắc chắn?"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then(rs => {
        this.Check = true;
        if (rs.data) {
          this.ActivitiesUpdate(data, interveningLevel);
        }
        else {
          data.interveningLevel = data.interveningLevelCheck;
        }
      });
      return await myModal.present();
    }
    else {
      this.Check = false;
      this.ActivitiesUpdate(data, interveningLevel)
    }

  }
  ActivitiesUpdate(data, interveningLevel) {

    var body = {
      "activityId": data.activityId,
      "interveningLevel": interveningLevel
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + "intervention/activities/update", body).subscribe(rs => {
        if (interveningLevel == 3) {
          this.GetPostTree();
        }
        else {
          data.interveningLevel = interveningLevel;

        }
      }, error => {
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
    txt.innerHTML = html;
    return txt.value;
  }
  PostViewActivities(data) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + "intervention/posts/getByIdOrSlug?idOrSlug=" + data.InterventionData.slug).subscribe(rs => {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            post: data.InterventionData.id,
            child: this.sltChild.id,
            list: data.InterventionData,
            conten: this.getSafehtml(data.InterventionData.content)
          },
        };
        this.router.navigate(['/viewpost-intervention-data'], navigationExtras);
      }, error => {
      })

    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  opendanhgia() {
    if (this.sltChild != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.sltChild,
      };
      this.router.navigate(['/nhatkycanthiep-hoatdong'], navigationExtras);
    } else {
      this.service.message("Vui lòng chọn trẻ");
    }
    // this.checkopen = !this.checkopen
  }
  Checkv() {
    if (this.sltChild != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.sltChild,
      };
      this.router.navigate(['/nhatkycanthiep-danhgia'], navigationExtras);
    } else {
      this.service.message("Vui lòng chọn trẻ");
    }
    // this.checkview = !this.checkview
  }
  Checkv1() {
    this.checkview1 = !this.checkview1
  }
  Checkv2() {
    this.checkview2 = !this.checkview2
  }
  danhgia() {
    if (this.sltChild != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.sltChild,
      };
      this.router.navigate(['/danhgiahieuqua'], navigationExtras);
    } else {
      this.service.message("Vui lòng chọn trẻ");
    }
  }
  backpage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if (this.service.PackRoot == "trangcuatoi") {
      pageBack = "/trangcuatoi"
    }
    this.router.navigate([pageBack])
  }
  ViewVideo(data) {
    debugger
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/video-view'], navigationExtras);
  }
}


