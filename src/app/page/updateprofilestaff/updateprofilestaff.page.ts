import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-updateprofilestaff',
  templateUrl: './updateprofilestaff.page.html',
  styleUrls: ['./updateprofilestaff.page.scss'],
})
export class UpdateprofilestaffPage implements OnInit {

  txtEmail = "";
  txtSDT = "";
  txtHoten = "";
  txtGioitinh = "";
  sltEthnic = null;
  txtNamsinh = "";
  sltArea = null;
  txtDiachi = "";
  sltJob = null;
  sltRefersource = null;
  checkArea = false;
  listDistrict = [];
  sltDistrict = null;
  listTown = [];
  sltTown = null;
  listJOB = [];
  listgenders = [
    { id: 1, genders: "male", text: "Nam", img: "assets/icon/iconnam.png" },
    { id: 2, genders: "female", text: "Nữ", img: "assets/icon/iconnu.jpg" }
  ];
  listethnic = [
    { id: 1, Ma: "kinh", text: "Kinh" },
    { id: 2, Ma: "other", text: "Khác" }
  ];
  listarea = [];
  listWorkPlace = [
    { id: 1, Ma: "SW-1", text: "Trạm y tế" },
    { id: 2, Ma: "SW-2", text: "Trung tâm y tế huyện/ Bệnh viện huyện" },
    { id: 3, Ma: "SW-3", text: "Bệnh viện tỉnh/thành phố" },
    { id: 4, Ma: "SW-4", text: "Bệnh viện Nhi Trung ương" },
    { id: 5, Ma: "SW-5", text: "Bệnh Viện Nhi đồng 1/ Bệnh viện nhi đồng 2" },
    { id: 6, Ma: "SW-6", text: "Khoa nhi bệnh viện các trường đại học Y" },
    { id: 7, Ma: "SW-7", text: "Phòng khám tư nhân" },
    { id: 8, Ma: "SW-8", text: "Trường mầm non" },
    { id: 9, Ma: "SW-9", text: "Trung tâm can thiệp sớm" },
    { id: 10, Ma: "SW-10", text: "Các trường đại học/cơ quan nghiên cứu" },
    { id: 11, Ma: "SW-11", text: "Khác" },
  ];
  sltWorkPlace = null;
  listREFERSOURCE = [
    { id: 1, Ma: "RS-1", text: "Mạng xã hội (Facebook)" },
    { id: 2, Ma: "RS-2", text: "Trên internet (tìm kiếm trên Google, đọc báo mạng,...)" },
    { id: 3, Ma: "RS-3", text: "Được người khác giới thiệu" },
    { id: 4, Ma: "RS-4", text: "Báo, đài, ti vi, tờ rơi, áp phích" },
    { id: 5, Ma: "RS-5", text: "Khác" }
  ]
  CheckEvent = false;
  data = null;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    this.service.Page = "";

    this.data = this.navParams.data;
    this.GetListCity();
    if (this.service.Role == 2) {
      this.listJOB = [
        { id: 1, Ma: "SJ-1", text: "Bác sĩ chuyên khoa nhi" },
        { id: 2, Ma: "SJ-2", text: "Bác sĩ đa khoa" },
        { id: 3, Ma: "SJ-3", text: "Bác sĩ chuyên ngành khác" },
        { id: 4, Ma: "SJ-4", text: "Y tá/điều dưỡng" },
        { id: 5, Ma: "SJ-5", text: "Giáo viên mầm non" },
        { id: 6, Ma: "SJ-6", text: "Giáo viên giáo dục đặc biệt" },
        { id: 7, Ma: "SJ-7", text: "Cán bộ tâm lý" },
        { id: 8, Ma: "SJ-8", text: "Nghiên cứu viên" },
        { id: 9, Ma: "SJ-9", text: "Khác" },
      ];
    } else {
      this.listJOB = [
        { id: 1, Ma: "PJ-1", text: "Nông dân" },
        { id: 2, Ma: "PJ-2", text: "Công nhân" },
        { id: 3, Ma: "PJ-3", text: "Buôn bán nhỏ" },
        { id: 4, Ma: "PJ-4", text: "Cán bộ văn phòng như cán bộ lễ tân, thư ký" },
        { id: 5, Ma: "PJ-5", text: "Cán bộ ngành y như y tá, bác sĩ" },
        { id: 6, Ma: "PJ-6", text: "Cán bộ chuyên môn như giáo viên, kỹ sư" },
        { id: 7, Ma: "PJ-7", text: "Khác" }
      ];
    }
  }
  ngOnInit() {
  }
  // updateprofile
  updateprofile() {

    if (this.txtSDT == "" || this.txtHoten == "" || this.txtGioitinh == "" || this.sltEthnic == null || this.txtNamsinh == "" || this.sltArea == null || this.sltJob == null || this.sltRefersource == null) {
      this.service.message("Vui lòng điền đầy đủ thông tin!")
    } else if (this.checkArea) {
      if (this.sltDistrict == null || this.sltTown == null || this.sltWorkPlace == null) {
        this.service.message("Vui lòng điền đầy đủ thông tin!")
      }
      else {
        this.Profiles(this.sltDistrict.code, this.sltTown.code)
      }
    }
    else {
      this.Profiles(0, 0);
    }

  }
  Profiles(district, ward) {
    var body = {
      "userId": this.service.id,
      "email": this.txtEmail,
      "name": this.txtHoten,
      "gender": this.txtGioitinh,
      "ethnic": this.sltEthnic.Ma,
      "birthYear": parseInt(this.txtNamsinh),
      "area": parseInt(this.sltArea.code),
      "district": district,
      "ward": ward,
      "address": this.txtDiachi,
      "phoneNumber": this.txtSDT,
      "job": this.sltJob.Ma,
      "workplace": this.sltWorkPlace.Ma,
      "referSource": this.sltRefersource.Ma
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postAPIquestionmchatR(this.service.getHost() + "profiles", body).subscribe
        (rs => {
          // var result = rs.json();
          this.service.message("Cập nhập thông tin thành công. Vui lòng kích hoạt tài khoản qua email!")
          this.modalCtrl.dismiss();

        }, er => {
          var error = er.json();
          this.service.message(error.message);
        });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  GetListCity() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "webConfigurations/administrativeRegions?type=1&").subscribe
        (rs => {
          var result = rs.json();
          this.listarea = result;
        }, error => {
          this.toast.showToast;
        });
      // this.modalCtrl.dismiss();
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  GetListDistrict(code) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "webConfigurations/administrativeRegions?type=2&parentCode=" + code + "&").subscribe
        (rs => {
          var result = rs.json();
          this.listDistrict = result;
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
  GetListTown(code) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "webConfigurations/administrativeRegions?type=3&parentCode=" + code + "&").subscribe
        (rs => {
          var result = rs.json();
          this.listTown = result;
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
  checkModal = true;
  async backPage() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          this.modalCtrl.dismiss();
        }
      });
      return await myModal.present();
    }
  }
  // backPage() {

  //   this.modalCtrl.dismiss();
  // }
  EthnicChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  WorkPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  AreaChange(event: { component: IonicSelectableComponent, value: any }) {
    if (this.sltArea.code == 33) {
      this.checkArea = true;
      this.GetListDistrict(this.sltArea.code);
    }
    else if (this.sltArea.code == 34) {
      this.checkArea = true;
      this.GetListDistrict(this.sltArea.code);
    }
    else {
      this.checkArea = false;
    }
  }
  JobChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  RefersourceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  DistrictChange(event: { component: IonicSelectableComponent, value: any }) {
    this.GetListTown(this.sltDistrict.code);
  }
  TownChange(event: { component: IonicSelectableComponent, value: any }) {
  }
}
