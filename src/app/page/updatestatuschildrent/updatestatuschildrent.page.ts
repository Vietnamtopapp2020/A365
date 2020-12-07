import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-updatestatuschildrent',
  templateUrl: './updatestatuschildrent.page.html',
  styleUrls: ['./updatestatuschildrent.page.scss'],
})
export class UpdatestatuschildrentPage implements OnInit {
  updatechildren: any[];
  childrenlist = [];
  txtname = "";
  txtdob = "";
  skip = 0;
  take = 10;
  query = "";
  sort = "";
  txtgender: string;
  txtparentName: string;
  txtpregnantWeeks: number;
  txtisDiagnosed: boolean;
  txtdiagnosticConclusion = null;
  txtcomplementaryConclusion: string;
  txtageWhenDiagnosed: number;
  txtdiagnosticPlace = null;
  txtdiagnosticStaff = null;
  txtscreenedOnA365: boolean;
  notifi = [{
    text: "Cập nhật trẻ thành công"
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
  dp = [
    { id: "DP-1", text: " Bệnh viện Nhi Trung Ương " },
    { id: "DP-2", text: " Bệnh viện Đại học Y " },
    { id: "DP-3", text: " Bệnh viện Nhi Đồng 1 " },
    { id: "DP-4", text: " Bệnh viện Nhi Đồng 2 " },
    { id: "DP-5", text: " Bệnh viện Tỉnh " },
    { id: "DP-6", text: " Trung tâm can thiệp " },
    { id: "DP-7", text: " Khác " }
  ]
  ds = [
    { id: "DS-1", text: " Bác sĩ chuyên khoa nhi " },
    { id: "DS-", text: " Bác sĩ đa khoa " },
    { id: "DS-3", text: " Cán bộ tâm lý " },
    { id: "DS-4", text: " Bác sĩ chuyên ngành khác " },
    { id: "DS-5", text: " Y tá/điều dưỡng " },
    { id: "DS-6", text: " Giáo viên mầm non " },
    { id: "DS-7", text: " Giáo viên giáo dục đặc biệt " },
    { id: "DS-7", text: " Khác " }
  ]
  form1 = [
    { screenedOnA365: "true", text: "Rồi" },
    { screenedOnA365: "false", text: "Chưa" },
  ];
  data: any;
  Check = '';
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.service.Page = "";


    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.txtname = this.data.name;
    this.txtdob = moment(this.data.dob).add().format('DD/MM/YYYY');
    this.txtageWhenDiagnosed = this.data.ageWhenDiagnosed;
    this.txtisDiagnosed = Boolean(this.data.isDiagnosed);
    for (var i = 0; i < this.dc.length; i++) {
      if (this.data.diagnosticConclusion == this.dc[i].id) {
        this.txtdiagnosticConclusion = this.dc[i];
        break;
      }
    }
    for (var i = 0; i < this.dp.length; i++) {
      if (this.data.diagnosticPlace == this.dp[i].id) {
        this.txtdiagnosticPlace = this.dp[i];
        break;
      }
    }
    for (var i = 0; i < this.ds.length; i++) {
      if (this.data.diagnosticStaff == this.ds[i].id) {
        this.txtdiagnosticStaff = this.ds[i];
        break;
      }
    }
    this.txtscreenedOnA365 = Boolean(this.data.screenedOnA365);
  }
  diagnosticPlaceChanged(event: { component: IonicSelectableComponent, value: any }) {
  }
  diagnosticStaffChanged(event: { component: IonicSelectableComponent, value: any }) {
  }
  diagnosticConclusionChanged(event: { component: IonicSelectableComponent, value: any }) {
  }

  Updatestatuschildren() {

    var diagnosticConclusion = "";
    var diagnosticPlace = "";
    var diagnosticStaff = "";
    if (this.txtdiagnosticConclusion == null) {
      diagnosticConclusion = null;
    }
    else {
      diagnosticConclusion = this.txtdiagnosticConclusion.id;
    }
    if (this.txtdiagnosticPlace == null) {
      diagnosticPlace = null;
    }
    else {
      diagnosticPlace = this.txtdiagnosticPlace.id;
    }
    if (this.txtdiagnosticStaff == null) {
      diagnosticStaff = null;
    }
    else {
      diagnosticStaff = this.txtdiagnosticStaff.id;
    }
    var body = {
      "ageWhenDiagnosed": this.txtageWhenDiagnosed,
      "birthDate": moment(this.data.birthDate).format("DD-MM-YYYY"),
      "complementaryConclusion": this.data.complementaryConclusion,
      "diagnosticConclusion": this.txtdiagnosticConclusion,
      "diagnosticPlace": this.txtdiagnosticPlace,
      "diagnosticStaff": this.txtdiagnosticStaff,
      "dob": this.data.dob,
      "gender": this.data.gender,
      "isDiagnosed": this.data.isDiagnosed,
      "name": this.data.name,
      "pregnantWeeks": this.data.pregnantWeeks,
      "screenedOnA365": this.txtscreenedOnA365,
      "_id": this.data._id
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'children/' + this.data.id, body).subscribe(result => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        var rs = result.json();
        this.service.message(this.notifi[0].text);
      }, error => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
      });
      this.router.navigate(['/danhsachtre']);
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  ngOnInit() {
  }
  backPage() {
    this.router.navigate([['/danhsachtre']])
  }
}
