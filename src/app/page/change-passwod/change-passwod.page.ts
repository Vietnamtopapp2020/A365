import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-change-passwod',
  templateUrl: './change-passwod.page.html',
  styleUrls: ['./change-passwod.page.scss'],
})
export class ChangePasswodPage implements OnInit {
  pass_old = "";
  pass_new1 = "";
  pass_new2 = "";
  constructor(
    public service: ServiceService,
    private router: Router,
    public toast : ToastServiceService,
    public netWork: Network
  ) {
    this.service.Page = "";
  }

  ngOnInit() {
  }
  ChangPass() {
    if (this.pass_new1 == '' || this.pass_old == "" || this.pass_new2 == '') {
      this.service.message("Vui lòng nhập đầy đủ thông tin!")
    } else {
      if (this.pass_new1.length < 6 && this.pass_new2.length < 6) {
        this.service.message("Mật khẩu phải dài hơn 6 kí tự")
      }
      else {
        if (this.pass_new1 != this.pass_new2) {
          this.service.message("Mật khẩu xác nhận không trùng nhau!")
        }
        else {
          var body = {
            "confirmNewPassword": this.pass_new2,
            "newPassword": this.pass_new1,
            "password": this.pass_old,
          }
          if (this.netWork.type.toUpperCase() != "NONE") {
            this.service.PutAPIanswersheetCDC(this.service.getHost() + 'users/me/password', body)
              .subscribe(rs => {
                this.service.message("Cập nhật mật khẩu thành công!");
                this.backPage()
              }, er => {
                var error = er.json();
                this.service.message(error.message);
              });
          }else{
            this.service.message("Vui lòng kiểm tra đường truyền internet!");
            if (this.service.CheckLoading) {
              this.service.CheckLoading = false;
              this.toast.DismissToast();
            };
          }
        }
      }
    }
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
}
