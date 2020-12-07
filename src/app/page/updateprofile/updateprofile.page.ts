import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
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
  listgenders = [
    { id: 1, genders: "male", text: "Nam" },
    { id: 2, genders: "female", text: "Nữ" }
  ];
  listethnic = [
    { id: 1, Ma: "kinh", text: "Kinh" },
    { id: 2, Ma: "other", text: "Khác" }
  ];
  listarea = [];
  listJOB = [];
  listREFERSOURCE = [
    { id: 1, Ma: "RS-1", text: "Mạng xã hội (Facebook)" },
    { id: 2, Ma: "RS-2", text: "Trên internet (tìm kiếm trên Google, đọc báo mạng,...)" },
    { id: 3, Ma: "RS-3", text: "Được người khác giới thiệ" },
    { id: 4, Ma: "RS-4", text: "Báo, đài, ti vi, tờ rơi, áp phích" },
    { id: 5, Ma: "RS-5", text: "Khác" }
  ];
  listWorkPlace = [
    { id: 1, Ma: "SW-1", text: "Trạm y tế" },
    { id: 2, Ma: "SW-2", text: "Trung tâm y tế huyện/ Bệnh viện huyện" },
    { id: 3, Ma: "SW-3", text: "Bệnh viện tỉnh/thành phố" },
    { id: 4, Ma: "SW-4", text: "Bệnh viện Nhi Trung ương" },
    { id: 5, Ma: "RS-5", text: "Bệnh Viện Nhi đồng 1/ Bệnh viện nhi đồng 2" },
    { id: 6, Ma: "SW-6", text: "Khoa nhi bệnh viện các trường đại học Y" },
    { id: 7, Ma: "SW-7", text: "Phòng khám tư nhân" },
    { id: 8, Ma: "SW-8", text: "Trường mầm non" },
    { id: 9, Ma: "SW-9", text: "Trung tâm can thiệp sớm" },
    { id: 10, Ma: "SW-10", text: "Các trường đại học/cơ quan nghiên cứu" },
    { id: 11, Ma: "SW-11", text: "Khác" },
  ]
  sltWorkPlace = null;
  CheckEvent = false;
  data = null;
  area: any;
  district: any;
  ward: any;
  constructor(
    public service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public router: Router,
    public menuCtrl: MenuController,
    public netWork: Network
  ) {
    this.menuCtrl.close();
    this.data = this.router.getCurrentNavigation().extras.queryParams;
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
    this.GetDataMe();
  }
  ngOnInit() {
  }
  GetDataMe() {
    this.service.postGet(this.service.getHost() + 'users/me').subscribe
      (rs => {
        var result = rs.json();
        this.area = result.profile.area;
        this.district = result.profile.district;
        this.ward = result.profile.ward;
        this.GetListCity();

        this.txtEmail = result.profile.email;
        this.txtSDT = result.profile.phoneNumber;
        this.txtHoten = result.profile.name;
        this.txtGioitinh = result.profile.gender;
        this.listethnic.forEach(element => {
          if (element.Ma == result.profile.ethnic) {
            this.sltEthnic = element;
          }
        });
        this.txtNamsinh = result.profile.birthYear
        this.listethnic.forEach(element => {
          if (element.Ma == result.profile.ethnic) {
            this.sltEthnic = element;
          }
        });
        this.txtDiachi = result.profile.address;
        this.listJOB.forEach(element => {
          if (element.Ma == result.profile.job) {
            this.sltJob = element;
          }
        });
        this.listREFERSOURCE.forEach(element => {
          if (element.Ma == result.profile.referSource) {
            this.sltRefersource = element;
          }
        });
        this.listWorkPlace.forEach(element => {
          if (element.Ma == result.profile.workplace) {
            this.sltWorkPlace = element;
          }
        });
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
      }, er => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        var error = er.json();
        this.service.message(error.message);
      });
  }
  // updateprofile
  updateprofile() {
    if (this.txtSDT == "" || this.txtHoten == "" || this.txtGioitinh == "" || this.sltEthnic == null || this.txtNamsinh == "" || this.sltArea == null || this.sltJob == null || this.sltRefersource == null) {
      this.service.message("Vui lòng điền đầy đủ thông tin!")
    } else if (this.checkArea) {
      if (this.sltDistrict == null || this.sltTown == null) {
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
    var workplace = "";
    if (this.sltWorkPlace != null) {
      workplace = this.sltWorkPlace.Ma;
    }
    var body = {
      "address": this.txtDiachi,
      "area": this.sltArea.code,
      "birthYear": parseInt(this.txtNamsinh),
      "district": district,
      "ethnic": this.sltEthnic.Ma,
      "gender": this.txtGioitinh,
      "job": this.sltJob.Ma,
      "name": this.txtHoten,
      "phoneNumber": this.txtSDT,
      "ward": ward,
      "workplace": workplace,
      "_id": this.service.id,
    }
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + "profiles/me", body).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message("Cập nhật thông tin thành công!")
          if (this.service.Role == 1) {
            // this.router.navigate(['/doashboadparent'])
            this.router.navigate(["/trangcuatoi"])
          }
          else if (this.service.Role == 2) {
            // this.router.navigate(['/dashboard'])
            this.router.navigate(["/trangcuatoi"])
          }
          else if (this.service.Role == 3) {
            // this.router.navigate(['/dashboadteacher'])
            this.router.navigate(["/trangcuatoi"])
          }
          else {
            this.router.navigate(['/register'])
          }

        }, er => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
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
          this.listarea.forEach(element => {
            if (element.code == this.area) {
              this.sltArea = element;
              if (this.sltArea.code == 33) {
                this.checkArea = true;
                this.GetListDistrict(this.sltArea.code, 1);
              }
              else if (this.sltArea.code == 34) {
                this.checkArea = true;
                this.GetListDistrict(this.sltArea.code, 1);
              }
              else {
                this.checkArea = false;
              }
            }
          });
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
  GetListDistrict(code, check) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "webConfigurations/administrativeRegions?type=2&parentCode=" + code + "&").subscribe
        (rs => {
          var result = rs.json();
          this.listDistrict = result;
          if (check == 1) {
            this.listDistrict.forEach(element => {
              if (element.code == this.district) {
                this.sltDistrict = element;
                this.GetListTown(this.sltDistrict.code, 1);
              }
            });
          }
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
  GetListTown(code, check) {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "webConfigurations/administrativeRegions?type=3&parentCode=" + code + "&").subscribe
        (rs => {
          var result = rs.json();
          this.listTown = result;
          if (check == 1) {
            this.listTown.forEach(element => {
              if (element.code == this.ward) {
                this.sltTown = element;
              }
            });
          }
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
  backpage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if (this.service.PackRoot == "trangcuatoi") {
      pageBack = "/trangcuatoi"
    }
    if (this.service.Role == 1) {
      this.router.navigate([pageBack])
    }
    else if (this.service.Role == 2) {
      this.router.navigate([pageBack])
    }
    else if (this.service.Role == 3) {
      this.router.navigate([pageBack])
    }
  }
  EthnicChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  AreaChange(event: { component: IonicSelectableComponent, value: any }) {
    if (this.sltArea.code == 33) {
      this.checkArea = true;
      this.GetListDistrict(this.sltArea.code, 0);
    }
    else if (this.sltArea.code == 34) {
      this.checkArea = true;
      this.GetListDistrict(this.sltArea.code, 0);
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
    this.GetListTown(this.sltDistrict.code, 0);
  }
  TownChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  WorkPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ChangePassword() {
    this.router.navigate(['/change-passwod']);
  }
}
