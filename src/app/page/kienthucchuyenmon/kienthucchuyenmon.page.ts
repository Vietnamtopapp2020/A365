import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-kienthucchuyenmon',
  templateUrl: './kienthucchuyenmon.page.html',
  styleUrls: ['./kienthucchuyenmon.page.scss'],
})
export class KienthucchuyenmonPage implements OnInit {

  list = [];
  listIcon = [
    { iconName: "assets/icon/book.png" },
    { iconName: "assets/icon/briefcase.png" },
    { iconName: "assets/icon/layers.png" },
  ]
  data : any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    private menuCtrl: MenuController,
    public netWork: Network,
    public navCtrl: NavController
  ) {
    // this.service.Page = "";
    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.Getlistitle();
  }
  ngOnInit() {
  }
  Getlistitle() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.Getchildren(this.service.getHost() + 'knowledge/topics/topLevel').subscribe(rs => {
        var result = rs.json();
        result.forEach(element => {
          this.list.push({
            children: element.children,
            createdAt: element.createdAt,
            description: element.description,
            hexCode: element.hexCode,
            id: element.key,
            key: element.order,
            order: element.children,
            parent: element.parent,
            slug: element.slug,
            title: element.title,
            updatedAt: element.updatedAt,
            icon: ""
          })
        });
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].icon = this.listIcon[i].iconName,
            this.list[i].hexCode = "CssBorder" + i;
        }
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
      })
    } else {
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
  getdetail(data) {
    console.log(JSON.stringify(data));
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/kienthucchude'], navigationExtras);
  }
  backPage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if(this.service.PackRoot == "trangcuatoi"){
      pageBack = "/trangcuatoi"
    }
    if (this.data != undefined) {
      this.router.navigate([pageBack])
    }
    else {
      this.menuCtrl.open();
      if (this.service.Role == 1) {
        this.router.navigate([pageBack])
      }
      else if (this.service.Role == 2) {
        this.router.navigate([pageBack])
      }
      else if (this.service.Role == 3) {
        this.router.navigate([pageBack])
      }
      else {
        this.router.navigate(['/register'])
      }
    }
  }
}