import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-administrative-regions-mchatrf',
  templateUrl: './administrative-regions-mchatrf.page.html',
  styleUrls: ['./administrative-regions-mchatrf.page.scss'],
})
export class AdministrativeRegionsMCHATRFPage implements OnInit {
  backpage() {
    this.router.navigate([this.Data.page])
  }
  listethnic = [
    { id: 1, Ma: "kinh", text: "Kinh" },
    { id: 2, Ma: "other", text: "Khác" }
  ];
  listchildRelation = [
    { id: "1", text: "Cha/Mẹ" },
    { id: "2", text: "Ông/Bà" },
    { id: "3", text: "Cô/Chú" },
    { id: "4", text: "Người chăm sóc trẻ(Ghi rõ)" },

  ]
  listarea = [
    { id: 1, text: "Thành phố Hà Nội" }, { id: 2, text: "Thành phố Hồ Chí Minh" }, { id: 3, text: "Thành phố Hải PHòng" }, { id: 4, text: "Thành phố Đà Nẵng" }, { id: 5, text: "Tỉnh An Giang" },
    { id: 6, text: "Tỉnh Cao Bằng" }, { id: 7, text: "Tỉnh Lai Châu" }, { id: 8, text: "Tỉnh Lào Cai" }, { id: 9, text: "Tỉnh Tuyên Quang" }, { id: 10, text: "Tỉnh Lạng Sơn" },
    { id: 11, text: "Tỉnh Bắc Cạn" }, { id: 12, text: "Tỉnh Thái Nguyên" }, { id: 13, text: "Tỉnh Yên Bái" }, { id: 14, text: "Tỉnh Sơn La" }, { id: 15, text: "Tỉnh Phú Thọ" },
    { id: 16, text: "Tỉnh Vĩnh Phúc" }, { id: 17, text: "Tỉnh Quảng Ninh" }, { id: 18, text: "Tỉnh Bắc Giang" }, { id: 19, text: "Tỉnh Bắc Ninh" },
    { id: 21, text: "Tỉnh Hải Dương" }, { id: 22, text: "Tỉnh Hưng Yên" }, { id: 23, text: "Tỉnh Hòa Bình" }, { id: 24, text: "Tỉnh Hà Nam" }, { id: 25, text: "Tỉnh Nam Định" },
    { id: 26, text: "Tỉnh Thái Bình" }, { id: 27, text: "Tỉnh Ninh Bình" }, { id: 28, text: "Tỉnh Thanh Hóa" }, { id: 29, text: "Tỉnh Nghệ An" }, { id: 30, text: "Tỉnh Hà Tĩnh" },
    { id: 31, text: "Tỉnh Quảng Bình" }, { id: 32, text: "Tỉnh Quảng Trị" }, { id: 33, text: "Tỉnh Thừa Thiên - Huế" }, { id: 34, text: "Tỉnh Quảng Nam" }, { id: 35, text: "Tỉnh Quảng Ngãi" },
    { id: 36, text: "Tỉnh Khom Tum" }, { id: 37, text: "Tỉnh Bình Định" }, { id: 38, text: "Tỉnh Gia Lai" }, { id: 39, text: "Tỉnh Phú Yên" }, { id: 40, text: "Tỉnh Đắk Lắk" },
    { id: 41, text: "Tỉnh Khánh Hòa" }, { id: 42, text: "Tỉnh Lâm Đồng" }, { id: 43, text: "Tỉnh Bình Phước" }, { id: 44, text: "Tỉnh Bình Dương" }, { id: 45, text: "Tỉnh Ninh Thuận" },
    { id: 46, text: "Tỉnh Tây Ninh" }, { id: 47, text: "Tỉnh Bình Thuận" }, { id: 48, text: "Tỉnh Đồng Nai" }, { id: 49, text: "Tỉnh Long An" }, { id: 50, text: "Tỉnh Đồng Tháp" },
    { id: 51, text: "Tỉnh An Giang" }, { id: 52, text: "Tỉnh Bà Rịa - Vũng Tàu" }, { id: 53, text: "Tỉnh Tiền Giang" }, { id: 54, text: "Tỉnh Kiên Giang" }, { id: 55, text: "Tỉnh Cần Thơ" },
    { id: 56, text: "Tỉnh Bến Tre" }, { id: 57, text: "Tỉnh Vĩnh Long" }, { id: 58, text: "Tỉnh Trà Vinh" }, { id: 59, text: "Tỉnh Sóc Trăng" }, { id: 60, text: "Tỉnh Bạc Liêu" },
    { id: 61, text: "Tỉnh Cà Mau" }, { id: 62, text: "Tỉnh Điện Biên" }, { id: 63, text: "Tỉnh Đắk Nông" }, { id: 64, text: "Tỉnh Hậu giang" }
  ];
  listscreeningPlace = [
    { id: 1, text: "Nhà" },
    { id: 2, text: "Cơ sở y tế" },
    { id: 3, text: "Khác" }
  ]
  listgender = [
    { id: "male", text: "Nam" },
    { id: "female", text: "Nữ" },
  ]
  txtname = "";
  txtbirthYear: number;
  txtgender = null;
  txtarea = null;
  txtaddress = "";
  txtchildRelation = null;
  txtethnic = null;
  txtphoneNumber = "";
  txtscreeningPlace = null;
  Data: any;
  listProfiles = [];
  sltProfiles = null;
  txtRelation = "";
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {

    this.service.Page = "";
    this.service.PlatFormData = null;
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
    this.relatedProfiles();
  }
  GenderChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  EthnicChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ChildRelationChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  AreaChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ScreeningPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ProfilesPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
    this.txtname = this.sltProfiles.name;
    this.txtbirthYear = this.sltProfiles.birthYear;
    this.txtaddress = this.sltProfiles.address;
    this.txtphoneNumber = this.sltProfiles.phoneNumber;
    this.listgender.forEach(element => {
      if (element.id == this.sltProfiles.gender) {
        this.txtgender = element;
      }
    });
    this.listethnic.forEach(element => {
      if (element.Ma == this.sltProfiles.ethnic) {
        this.txtethnic = element;
      }
    });
    var check = true;
    this.listchildRelation.forEach(element => {
      if (element.text == this.sltProfiles.childRelation) {
        this.txtchildRelation = element;
        check = false;
      }
    });
    if (check) {
      this.txtchildRelation = { id: "4", text: "Người chăm sóc trẻ(Ghi rõ)" };
      this.txtRelation = this.sltProfiles.childRelation;
    }
    this.listarea.forEach(element => {
      if (element.id == this.sltProfiles.area) {
        this.txtarea = element;
      }
    });
    this.listscreeningPlace.forEach(element => {
      if (element.id == this.sltProfiles.screeningPlace) {
        this.txtscreeningPlace = element;
      }
    });
  }
  ngOnInit() {
  }
  Creatadministrativeasq() {
    if (this.sltProfiles == null) {
      var Gender = "";
      var Ethnic = 0;
      var ChildRelation = "";
      var Area = 0;
      var ScreeningPlace = 0;
      if (this.txtgender != null) {
        Gender = this.txtgender.id;
      }
      if (this.txtethnic != null) {
        Ethnic = this.txtethnic.Ma;
      }
      if (this.txtchildRelation != null) {
        if (this.txtchildRelation.id == 4) {
          ChildRelation = this.txtRelation;
        }
        else {
          ChildRelation = this.txtchildRelation.text;
        }
      }
      if (this.txtarea != null) {
        Area = this.txtarea.id;
      }
      if (this.txtscreeningPlace != null) {
        ScreeningPlace = this.txtscreeningPlace.id;
      }
      if (this.txtname == "") {
        this.service.message("Vui lòng nhập đầy đủ thông tin");
      }
      else if (this.txtchildRelation != null && this.txtchildRelation.id == 4 && this.txtRelation == "") {
        this.service.message("Vui lòng nhập mối quan hệ với trẻ");
      }
      else {
        var body = {
          "answersheetId": this.Data.createdId,
          "childId": this.Data.childId.id,
          "name": this.txtname,
          "birthYear": this.txtbirthYear,
          "gender": Gender,
          "ethnic": Ethnic,
          "childRelation": ChildRelation,
          "address": this.txtaddress,
          "area": Area,
          "phoneNumber": this.txtphoneNumber,
          "screeningPlace": ScreeningPlace,

        };
        if (this.netWork.type.toUpperCase() != "NONE") {
          this.service.postAPIquestionmchatR(this.service.getHost() + 'mchatr/testTakers', body).subscribe
            (rs => {

              let navigationExtras: NavigationExtras = {
                queryParams:
                {
                  createdId: this.Data.createdId,
                  pageKQ: this.Data.pageKQ
                }
              };
              this.router.navigate(['/ketquamchatrf'], navigationExtras);
            }, error => {
              var er = error.json();
              this.service.message(er.message);
            });
        } else {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          this.service.message("Vui lòng kiểm tra đường truyền internet!");
        }
      }
    } else {
      var body1 = {
        "answersheetId": this.Data.createdId,
        "childId": this.Data.childId.id,
        "profileId": this.sltProfiles.id,
        // "profile": this.sltProfiles,
      };
      if (this.netWork.type.toUpperCase() != "NONE") {
        this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'mchatr/testTakers', body1).subscribe
          (rs => {

            let navigationExtras: NavigationExtras = {
              queryParams: {
                createdId: this.Data.createdId,
                pageKQ: this.Data.pageKQ
              }
            };
            this.router.navigate(['/ketquamchatrf'], navigationExtras);
          }, error => {

            var er = error.json();
            this.service.message(er.message);
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
  relatedProfiles() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.Getchildren(this.service.getHost() + 'children/' + this.Data.childId.id + '/relatedProfiles').subscribe
        (rs => {
          var result = rs.json();
          this.listProfiles = result;
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
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
