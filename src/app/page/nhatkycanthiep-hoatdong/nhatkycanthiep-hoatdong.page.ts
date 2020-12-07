import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-nhatkycanthiep-hoatdong',
  templateUrl: './nhatkycanthiep-hoatdong.page.html',
  styleUrls: ['./nhatkycanthiep-hoatdong.page.scss'],
})
export class NhatkycanthiepHoatdongPage implements OnInit {
  data: any;
  listWorkChild = [];
  constructor(
    public navCtrl: NavController,
    public service: ServiceService,
    public modalCtrl: ModalController,
    public router: Router,
    public toast : ToastServiceService,
    public netWork: Network

  ) {
    this.service.Page = "";

    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.GetActivities()
  }
  backpage() {
    this.router.navigate(["/nhatkycanthiep"]);
  }
  ngOnInit() {
  }
  GetActivities() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + "intervention/activities/" + this.data.id + "/completed?take=10&").subscribe(rs => {
        var result = rs.json();
        this.service.postGet(this.service.getHost() + "intervention/activities/" + this.data.id + "/completed?take=" + result.total + "&").subscribe(rs1 => {
          var result1 = rs1.json();
          this.listWorkChild = result1.items
        }, error => {
        });
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
