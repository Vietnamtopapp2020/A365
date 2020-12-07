import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, Platform, NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
@Component({
  selector: 'app-updateexpert',
  templateUrl: './updateexpert.page.html',
  styleUrls: ['./updateexpert.page.scss'],
})
export class UpdateexpertPage implements OnInit {

  txtEmail: String;
  txtSDT: any;
  txtHoten: any;
  txtDiachi: any;
  txtGioitinh: any;
  txtDantoc: any;
  txtNamsinh: any;
  txtKhuvuc: any;
  txtNghenghiep: any;
  txtWorkplace: any;
  txtGioithieu: any;
  data = null;
  listgenders = [
    { id: 1, genders: "male", text: "Nam" },
    { id: 2, genders: "female", text: "Nữ" }
  ];
  listethnic = [
    { id: 1, Ma: "kinh", text: "Kinh" },
    { id: 2, Ma: "other", text: "Khác" }
  ];

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

  listJOB = [
    { id: 1, Ma: "SJ-1", text: "Bác sĩ chuyên khoa nhi" },
    { id: 2, Ma: "SJ-2", text: "Bác sĩ đa khoa" },
    { id: 3, Ma: "SJ-3", text: "Bác sĩ chuyên ngành khác" },
    { id: 4, Ma: "SJ-4", text: "Y tá/điều dưỡng" },
    { id: 5, Ma: "SJ-5", text: "Giáo viên mầm non" },
    { id: 6, Ma: "SJ-6", text: "Giáo viên giáo dục đặc biệt" },
    { id: 7, Ma: "SJ-7", text: "Cán bộ tâm lý" },
    { id: 7, Ma: "SJ-8", text: "Nghiên cứu viên" },
    { id: 7, Ma: "SJ-9", text: "Khác" },
  ];
  listREFERSOURCE = [
    { id: 1, Ma: "RS-1", text: "Mạng xã hội (Facebook)" },
    { id: 2, Ma: "RS-2", text: "Trên internet (tìm kiếm trên Google, đọc báo mạng,...)" },
    { id: 3, Ma: "RS-3", text: "Được người khác giới thiệ" },
    { id: 4, Ma: "RS-4", text: "Báo, đài, ti vi, tờ rơi, áp phích" },
    { id: 5, Ma: "RS-5", text: "Khác" }
  ];
  listwordplace = [
    { Ma: 'SW-1', text: 'Trạm y tế' },
    { Ma: 'SW-2', text: 'Trung tâm y tế huyện/ Bệnh viện huyện' },
    { Ma: 'SW-3', text: 'Bệnh viện tỉnh/thành phố' },
    { Ma: 'SW-4', text: 'Bệnh viện Nhi Trung ương' },
    { Ma: 'SW-5', text: 'Bệnh Viện Nhi đồng 1/ Bệnh viện nhi đồng 2' },
    { Ma: 'SW-6', text: 'Khoa nhi bệnh viện các trường đại học Y' },
    { Ma: 'SW-7', text: 'Phòng khám tư nhân' },
    { Ma: 'SW-8', text: 'Trường mầm non' },
    { Ma: 'SW-9', text: 'Trung tâm can thiệp sớm' },
    { Ma: 'SW-10', text: 'Các trường đại học/cơ quan nghiên cứu' },
    { Ma: 'SW-11', text: 'Khác' },
  ];
  constructor(
    public modalCtrl: ModalController,
    private platform: Platform,
    private service: ServiceService,
    private navCtrl: NavController,
    public toast: ToastServiceService,
    public navParams: NavParams,
    public netWork: Network
  ) {
    this.service.Page = "";


    this.data = this.navParams.data;
  }

  ngOnInit() {
  }
  updateprofile() {
    var body = {

      "userId": this.data.id,
      "email": this.data.txtEmail,
      "name": this.txtHoten,
      "gender": this.txtGioitinh,
      "ethnic": this.txtDantoc,
      "birthYear": parseInt(this.txtNamsinh),
      "area": parseInt(this.txtKhuvuc),
      "district": 0,
      "ward": 0,
      "address": this.txtDiachi,
      "phoneNumber": this.txtSDT,
      "job": this.txtNghenghiep,
      "workplace": this.txtWorkplace,
      "referSource": this.txtGioithieu
    };
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.PutAPIanswersheetCDC(this.service.getHost() + 'profiles/me', body).subscribe
        (rs => {

          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var result = rs.json();


        }, error => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
        });
      this.navCtrl.navigateRoot('/dashboard');
      this.modalCtrl.dismiss();
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
}
