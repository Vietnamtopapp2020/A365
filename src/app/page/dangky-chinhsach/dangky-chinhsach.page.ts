import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { Network } from '@ionic-native/network/ngx';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-dangky-chinhsach',
  templateUrl: './dangky-chinhsach.page.html',
  styleUrls: ['./dangky-chinhsach.page.scss'],
})
export class DangkyChinhsachPage implements OnInit {
  data: any;
  description_html: any;
  Title = "";
  constructor(
    public router: Router,
    public service: ServiceService,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    this.service.Page = "";

    this.data = this.router.getCurrentNavigation().extras.queryParams;
    if (this.data.type == "dieukhoan") {
      this.DieuKhoan();
      this.Title = "Điều khoản và điều kiện sử dụng";
    }
    else {
      this.BaoMat();
      this.Title = "Chính sách bảo mật thông tin";
    }
  }
  ngOnInit() {
  }
  backpage() {
    this.router.navigate(['/dangki']);
  }
  DieuKhoan() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'webConfigurations/policy').subscribe(rs => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        var result = rs.json();
        this.description_html = this.getSafehtml(result.content);
      }, er => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        var error = er.json();
        this.service.message(error.message);
      });
    }else{
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  BaoMat() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'webConfigurations/termsOfUse').subscribe(rs => {
        var result = rs.json();
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        this.description_html = this.getSafehtml(result.content);
      }, er => {
        var error = er.json();
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
        this.service.message(error.message);
      });
    }else{
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }

  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
}
