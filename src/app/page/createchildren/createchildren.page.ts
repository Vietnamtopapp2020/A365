import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-createchildren',
  templateUrl: './createchildren.page.html',
  styleUrls: ['./createchildren.page.scss'],
})
export class CreatechildrenPage implements OnInit {
  childrenlist = [];
  txtname = "";
  txtdob = "";
  sltGender = null;
  txtparentName = "";
  txtpregnantWeeks: any;
  sltIsDiagnosed = null;
  sltDiagnosticConclusion = null;
  txtageWhenDiagnosed: any;
  sltDiagnosticPlace = null;
  sltDiagnosticStaff = null;
  sltScreenedOnA365 = null;
  Check = false;
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
    { id: "DS-2", text: " Bác sĩ đa khoa " },
    { id: "DS-3", text: " Cán bộ tâm lý " },
    { id: "DS-4", text: " Bác sĩ chuyên ngành khác " },
    { id: "DS-5", text: " Y tá/điều dưỡng " },
    { id: "DS-6", text: " Giáo viên mầm non " },
    { id: "DS-7", text: " Giáo viên giáo dục đặc biệt " },
    { id: "DS-8", text: " Khác " }
  ]
  listgender = [
    { id: "male", text: "Nam" },
    { id: "female", text: "Nữ" },
  ]
  form = [
    { isDiagnosed: true, text: "Rồi" },
    { isDiagnosed: false, text: "Chưa" },
  ];
  form1 = [
    { screenedOnA365: true, text: "Rồi" },
    { screenedOnA365: false, text: "Chưa" },
  ];

  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
    ) {  this.service.Page = "";

  }
  ngOnInit() {
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
  GenderChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  IsDiagnosedChange(event: { component: IonicSelectableComponent, value: any }) {
    if (this.sltIsDiagnosed.isDiagnosed) {
      this.Check = true;
    }
    else {
      this.Check = false;
    }
  }
  DiagnosticConclusionChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  DiagnosticStaffChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  DiagnosticPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ScreenedOnA365Change(event: { component: IonicSelectableComponent, value: any }) {
  }
  Creatchildren() {
    if (this.txtpregnantWeeks < 21 || this.txtpregnantWeeks > 45) {
      this.service.message("Số Tuần tuổi của thai kỳ trong khoảng 21-45 tuần!")
    }
    else if(this.sltIsDiagnosed == null){
      this.service.message("Trẻ đã từng được chẩn đoán tự kỷ/chậm phát triển trí tuệ/rối loạn phát triển chưa?")
    }
    else if( this.sltIsDiagnosed != null && this.sltIsDiagnosed.isDiagnosed && (this.txtageWhenDiagnosed == undefined || this.sltDiagnosticConclusion == null || this.sltDiagnosticPlace == null || this.sltDiagnosticStaff == null)){
      this.service.message("Vui lòng chọn đầy đủ thông tin!")
    }
    else {
      var gender = "";
      var isDiagnosed = false;
      var diagnosticConclusion = null;
      var diagnosticPlace = null;
      var diagnosticStaff = null;
      var screenedOnA365: false;
      if (this.sltGender != null) {
        gender = this.sltGender.id;
      }
      if (this.sltIsDiagnosed != null) {
        isDiagnosed = this.sltIsDiagnosed.isDiagnosed;
      }
      if (this.sltDiagnosticConclusion != null) {
        diagnosticConclusion = this.sltDiagnosticConclusion.id;
      }
      if (this.sltDiagnosticPlace != null) {
        diagnosticPlace = this.sltDiagnosticPlace.id;
      }
      if (this.sltDiagnosticStaff != null) {
        diagnosticStaff = this.sltDiagnosticStaff.id;
      }
      if (this.sltDiagnosticStaff != null) {
        diagnosticStaff = this.sltDiagnosticStaff.id;
      }
      if (this.sltScreenedOnA365 != null) {
        screenedOnA365 = this.sltScreenedOnA365.screenedOnA365;
      }
      var body = {
        "name": this.txtname,
        "dob": moment(this.txtdob).format('YYYY-MM-DDT17:00:00.000Z'),
        "gender": gender,
        "pregnantWeeks": this.txtpregnantWeeks,
        "parentName": this.txtparentName,
        "complementaryConclusion": null,
        "isDiagnosed": isDiagnosed,
        "diagnosticConclusion": diagnosticConclusion,
        "ageWhenDiagnosed": this.txtageWhenDiagnosed,
        "diagnosticPlace": diagnosticPlace,
        "diagnosticStaff": diagnosticStaff,
        "screenedOnA365": screenedOnA365
      };
      if(this.netWork.type.toUpperCase() != "NONE"){
      this.service.postAPIquestionmchatR(this.service.getHost() + 'children', body)
        .subscribe(result => {
                      if(this.service.CheckLoading){
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          var rs = result.json();
          this.service.message("Đăng ký trẻ thành công!");
          this.navCtr.pop();
        }, error => {
                      if(this.service.CheckLoading){
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          var rs = error.json();
          this.service.message(rs.message);
        });
      }else{
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        this.service.message("Vui lòng kiểm tra đường truyền internet!");
      }
    }
  }


}

