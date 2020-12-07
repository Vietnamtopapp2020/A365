import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-nhatkycanthiep-work',
  templateUrl: './nhatkycanthiep-work.page.html',
  styleUrls: ['./nhatkycanthiep-work.page.scss'],
})
export class
  NhatkycanthiepWorkPage implements OnInit {
  radioCheck: false;
  result: any;
  listQuery = [];
  query = {
    id: "",
    title: "",
    interveningLevel: "",
    checkUpdate: "",
    activityId: "",
  };
  interveningLevelCheck = null;
  index = 0;
  targetCheck = false
  listInterventionActivities = [];
  doimuctieu = 0;
  constructor(
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public loadingCtrl: LoadingController,
    public netWork: Network

  ) {
    debugger
    this.service.Page = "";
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.result = this.navParams.data;
    if (this.result.data.InterventionData != null) {
      this.index = this.result.data.InterventionData.position - 1;
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.GetInterventionActivities();
  }
  CloseModal() {
    this.modalCtrl.dismiss();
  }
  postsInActivitySelector() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetAPI(this.service.getHost() + "intervention/topics/" + this.result.data.id + "/postsInActivitySelector").subscribe(rs => {
        var result = rs.json();
        result.forEach(element => {
          var interveningLevel = null;
          var checkUpdate = false;
          var activityId = "";
          this.listInterventionActivities.forEach(element1 => {
            if (element1.interventionPost.id == element.id) {
              if (element1.interveningLevel == 3) {
                interveningLevel = "true";
              } else if (element1.interveningLevel == 1) {
                interveningLevel = "false";
              }
              activityId = element1._id
              checkUpdate = true;
            };
          });
          this.listQuery.push({
            id: element.id,
            title: element.title,
            interveningLevel: interveningLevel,
            checkUpdate: checkUpdate,
            activityId: activityId,
          })
        });
        this.query = this.listQuery[this.index];
        this.interveningLevelCheck = this.query.interveningLevel;
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
  BackQuery() {
    if (this.index > 0) {
      this.query = this.listQuery[this.index - 1];
      this.index = this.index - 1
      this.interveningLevelCheck = this.query.interveningLevel;
    }
  }
  NextQuery() {

    this.toast.showLoadingNext("");
    if (this.interveningLevelCheck != null) {
      if (this.targetCheck == false) {
        var interveningLevel = 0;
        if (this.interveningLevelCheck == "true") {
          interveningLevel = 3
        }
        else {
          interveningLevel = 1
        }
        if (this.query.checkUpdate) {
          this.ActivitiesUpdate(this.query, interveningLevel);
        }
        else {
          this.ActivitiesAdd(this.query, interveningLevel, this.interveningLevelCheck)
        }
        if (this.index < (this.listQuery.length - 1)) {
          this.query = this.listQuery[this.index + 1];
          this.index = this.index + 1;
          this.interveningLevelCheck = this.query.interveningLevel;
        }
      }
      else {
        var interveningLevel = 0;
        if (this.interveningLevelCheck == "true") {
          interveningLevel = 3
        }
        else {
          interveningLevel = 1
        }
        if (this.result.data.InterventionData != null && this.doimuctieu == 0) {
          this.service.message("Vui lòng chọn lý do đổi mục tiêu!")
        }
        else if (this.query.id == this.result.data.InterventionData.id) {
          this.service.message("Hoạt động đang được chọn làm mục tiêu!")
        }
        else {
          if (this.query.checkUpdate) {
            this.ActivitiesUpdate(this.query, interveningLevel);
          }
          else {
            this.ActivitiesAdd(this.query, interveningLevel, this.interveningLevelCheck)
          }
        }
      }
    }
    else {
      this.service.message("Vui lòng chọn nhập thông tin")
    }
  }
  CheckinterveningLevel(check) {

    this.interveningLevelCheck = check + "";
    this.query.interveningLevel = check + "";
    if (this.interveningLevelCheck == "false") {
      this.targetCheck = true;
    }
    else {
      this.targetCheck = false;
    }
  }
  ActivitiesUpdate(query, interveningLevel) {
    var body = {
      "activityId": query.activityId,
      "interveningLevel": interveningLevel
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + "intervention/activities/update", body).subscribe(rs => {
        if (this.targetCheck) {
          this.updateCurrentTarget(query.activityId);
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
  ActivitiesAdd(query, interveningLevel, interveningLevelCheck) {
    var body = {
      child: this.result.childerId,
      interveningLevel: interveningLevel,
      interventionPost: query.id
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionCDC(this.service.getHost() + "intervention/activities/add", body).subscribe(rs => {
        var result = rs.json()
        query.interveningLevel = interveningLevelCheck;
        query.checkUpdate = true;
        query.activityId = result._id;
        if (this.targetCheck) {
          this.updateCurrentTarget(result._id);
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
  GetInterventionActivities() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsMchartR(this.service.getHost() + "intervention/activities/" + this.result.childerId).subscribe(rs => {
        this.listInterventionActivities = rs.json();
        this.postsInActivitySelector();

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
  updateCurrentTarget(activityId) {
    var body: any;
    if (this.result.data.InterventionData != null) {
      var reason = "";
      if (this.doimuctieu == 1) { reason = "Hoạt động không phù hợp" }
      if (this.doimuctieu == 2) { reason = "Không phải hoạt động ưu tiên" }
      if (this.doimuctieu == 3) { reason = "Đã thử nhiều lần nhưng trẻ không làm được" }
      body = {
        "activityId": activityId,
        "reason": reason
      }
    }
    else {
      body = {
        "activityId": activityId
      }
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionCDC(this.service.getHost() + "intervention/activities/updateCurrentTarget", body).subscribe(rs => {
        var result = rs.json()
        this.service.message("Cập nhật mục tiêu thành công!");

        this.modalCtrl.dismiss();
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
  ChangeReason(type) {
    if (type == '1') { this.doimuctieu = 1 }
    if (type == '2') { this.doimuctieu = 2 }
    if (type == '3') { this.doimuctieu = 3 }
  }
  ChangtargetCheck() {
    if (this.result.data.InterventionData != null && this.query.id == this.result.data.InterventionData.id) {
      this.service.message("Hoạt động đang được chọn làm mục tiêu!")
    }
    else if (this.query.interveningLevel == "false" || this.interveningLevelCheck == null) {
      this.targetCheck = !this.targetCheck;
    }
  }
}
