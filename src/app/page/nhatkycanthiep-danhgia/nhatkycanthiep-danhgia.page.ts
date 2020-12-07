import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { NhatkycanthiepWorkPage } from '../nhatkycanthiep-work/nhatkycanthiep-work.page';

@Component({
  selector: 'app-nhatkycanthiep-danhgia',
  templateUrl: './nhatkycanthiep-danhgia.page.html',
  styleUrls: ['./nhatkycanthiep-danhgia.page.scss'],
})
export class NhatkycanthiepDanhgiaPage implements OnInit {
  data: any;
  listTree = [];
  listInterventionActivities = [];
  opacity = "";
  constructor(
    public navCtrl: NavController,
    public service: ServiceService,
    public modalCtrl: ModalController,
    public router: Router,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    this.service.Page = "";
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetPostTree();
  }
  ngOnInit() {
  }
  backpage() {
    this.router.navigate(["/nhatkycanthiep"]);
  }
  GetPostTree() {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "intervention/postTree").subscribe(rs => {
        var result = rs.json();
        this.listTree = []
        result[0].children.forEach(element => {
          var imgage = '';
          if (element.id == "5e69afb1856b56171c37181a") { imgage = "/assets/icon/hoctap.png" }
          if (element.id == "5e69af9c856b56666a371818") { imgage = "/assets/icon/choidua.png" }
          if (element.id == "5e69b00b856b56b57d371826") { imgage = "/assets/icon/giaotiep.png" }
          if (element.id == "5e69afe8856b560221371822") { imgage = "/assets/icon/chamsocbanthan.png" }
          if (element.id == "5e69affa856b563bed371824") { imgage = "/assets/icon/hdcd.png" }
          if (element.id == "5e69afbe856b5698f037181c") { imgage = "/assets/icon/xahoi.png" }
          if (element.id == "5e69afdb856b56b8bf371820") { imgage = "/assets/icon/thethao.png" }
          if (element.id == "5e69afcd856b56ae8d37181e") { imgage = "/assets/icon/hanhvi.png" }
          this.listTree.push({
            id: element.id,
            key: element.key,
            order: element.order,
            imgage: imgage,
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
        this
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
  GetInterventionActivities() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + "intervention/activities/" + this.data.id).subscribe(rs => {
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
  checkOpenWork = true;
  async OpenWork(data) {
    if (this.checkOpenWork) {
      var imgage = "";
      if (data.id == "5e69afb1856b56171c37181a") { imgage = "/assets/icon/hoctap.png" }
      if (data.id == "5e69af9c856b56666a371818") { imgage = "/assets/icon/choidua.png" }
      if (data.id == "5e69b00b856b56b57d371826") { imgage = "/assets/icon/giaotiep.png" }
      if (data.id == "5e69afe8856b560221371822") { imgage = "/assets/icon/chamsocbanthan.png" }
      if (data.id == "5e69affa856b563bed371824") { imgage = "/assets/icon/hdcd.png" }
      if (data.id == "5e69afbe856b5698f037181c") { imgage = "/assets/icon/xahoi.png" }
      if (data.id == "5e69afdb856b56b8bf371820") { imgage = "/assets/icon/thethao.png" }
      if (data.id == "5e69afcd856b56ae8d37181e") { imgage = "/assets/icon/hanhvi.png" }
      this.checkOpenWork = false;
      this.opacity = "opacity02";
      const myModal = await this.modalCtrl.create({
        component: NhatkycanthiepWorkPage,
        componentProps: {
          data: data,
          childerId: this.data.id,
          imgage: imgage,
        },
        // cssClass: "phone-modal"
        // cssClass: "modalMeetingZoom"
      });
      myModal.onDidDismiss().then(rs => {
        this.GetPostTree();
        this.checkOpenWork = true;
        this.opacity = "";

      });
      return await myModal.present();
    }
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  PostViewActivities(data) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + "intervention/posts/getByIdOrSlug?idOrSlug=" + data.InterventionData.slug).subscribe(rs => {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            post: data.InterventionData.id,
            child: this.data.id,
            list: data.InterventionData,
            conten: this.getSafehtml(data.InterventionData.content)
          }
        };
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
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
  Check = true;
  async CheckinterveningLevel(data, interveningLevel) {
    if (interveningLevel == 3) {
      if (this.Check) {
        this.Check = false;
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
    }
    else {
      this.ActivitiesUpdate(data, interveningLevel)
    }

  }
  ActivitiesUpdate(data, interveningLevel) {

    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    var body = {
      "activityId": data.activityId,
      "interveningLevel": interveningLevel
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + "intervention/activities/update", body).subscribe(rs => {
        if (interveningLevel == 3) {
          this.GetPostTree();
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        }
        else {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
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
}
