import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { stringify } from 'querystring';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-profile-answesguest',
  templateUrl: './profile-answesguest.page.html',
  styleUrls: ['./profile-answesguest.page.scss'],
})
export class ProfileAnswesguestPage implements OnInit {
  childrenlist = [];
  txtbirthYear: null;
  txtgender = null;
  txtRelation = "";
  txtaddress: string;
  txtchildRelation = null;
  txtethnic = null;
  txtphoneNumber = "";
  txtreferSource: string;
  txtscreeningPlace = null;
  childrenDetails: any[];
  translate: any;
  Page: any;
  CheckEvent = false;
  Check = "";
  Check1 = '';
  kqcd = Array();
  data: any[];
  Data: any;

  listchildRelation = [
    { id: 1, text: "Cha/Mẹ" },
    { id: 2, text: "Ông/Bà" },
    { id: 3, text: "Cô/Chú" },
    { id: 4, text: "Người chăm sóc trẻ(Ghi rõ)" },
  ]

  listgender = [
    { id: 1, genders: "male", text: "Nam" },
    { id: 2, genders: "female", text: "Nữ" }
  ];
  listethnic = [
    { id: 1, Ma: "kinh", text: "Kinh" },
    { id: 2, Ma: "other", text: "Khác" }
  ];
  listREFERSOURCE = [
    { id: 1, Ma: "RS-1", text: "Mạng xã hội (Facebook)" },
    { id: 2, Ma: "RS-2", text: "Trên internet (tìm kiếm trên Google, đọc báo mạng,...)" },
    { id: 3, Ma: "RS-3", text: "Được người khác giới thiệu" },
    { id: 4, Ma: "RS-4", text: "Báo, đài, ti vi, tờ rơi, áp phích" },
    { id: 5, Ma: "RS-5", text: "Khác" }
  ];
  listscreeningPlace = [
    { id: 1, text: "Nhà" },
    { id: 2, text: "Cơ sở y tế" },
    { id: 3, text: "Khác" }
  ]
  sltRefercource = null;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.service.Page = "";
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
  }

  ngOnInit() {
  }
  CreatprofileGuest() {
    if (this.txtphoneNumber == "" || this.txtgender == null || this.txtethnic == null || this.txtchildRelation == null || this.sltRefercource == null || this.txtscreeningPlace == null) {
      this.service.message("Vui lòng điền đầy đủ thông tin!")
    }
    else if (this.txtchildRelation != null && this.txtchildRelation.id == 4 && this.txtRelation == "") {
      this.service.message("Vui lòng nhập mối quan hệ với trẻ");
    }
    else {
      var gender = "";
      var ethnic = "";
      var childRelation = "";
      var Refercource = "";
      var screeningPlace = null;
      if (this.txtgender != null) {
        gender = this.txtgender.genders
      }
      if (this.txtethnic != null) {
        ethnic = this.txtethnic.Ma
      }
      if (this.txtchildRelation != null) {
        if (this.txtchildRelation.id == 4) {
          childRelation = this.txtRelation;
        }
        else {
          childRelation = this.txtchildRelation.text;
        }
      }
      if (this.sltRefercource != null) {
        Refercource = this.sltRefercource.Ma
      }
      if (this.txtscreeningPlace != null) {
        screeningPlace = this.txtscreeningPlace.id
      }
      var body = {
        "birthYear": parseInt(moment(this.txtbirthYear).format("YYYY")),
        "gender": gender,
        "ethnic": ethnic,
        "childRelation": childRelation,
        "address": this.txtaddress,
        "phoneNumber": this.txtphoneNumber,
        "referSource": Refercource,
        "screeningPlace": screeningPlace,
      };
      if (this.netWork.type.toUpperCase() != "NONE") {
        this.service.PutAPIanswersheetMchartR(this.service.getHost() + 'profiles/guest/' + this.Data.profileId + '?token=' + this.Data.token, body).subscribe(result => {
          this.Ketqua();
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
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
  }
  Ketqua() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        createdId: this.Data,
        token: this.Data.token
      }
    };
    this.router.navigate(['/ketquaasqguest'], navigationExtras);
  }
  GenderChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  EthnicChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ChildRelationChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  ScreeningPlaceChange(event: { component: IonicSelectableComponent, value: any }) {
  }
  REFERSOURCEChange(event: { component: IonicSelectableComponent, value: any }) {
  }
}

