import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-huongdancanthiep',
  templateUrl: './huongdancanthiep.page.html',
  styleUrls: ['./huongdancanthiep.page.scss'],
})
export class HuongdancanthiepPage implements OnInit {
  list = [];
  listvideo = [];
  listIcon = [
    { iconName: "assets/icon/book.png" },
    { iconName: "assets/icon/briefcase.png" },
    { iconName: "assets/icon/layers.png" },
  ];
  skip = 0;
  data = null;
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    this.data = this.router.getCurrentNavigation().extras.queryParams;
  }
  ngOnInit() {
    this.Getlistitle();
    this.GetListVideo();
  }
  Getlistitle() {
    this.service.Getchildren(this.service.getHost() + 'intervention/topics/roots').subscribe(rs => {
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

  }
  getdetail(data) {
    console.log(JSON.stringify(data));
    let navigationExtras: NavigationExtras = {
      queryParams: data,
    };
    this.router.navigate(['/huongdancanthiep-detail'], navigationExtras);
  }
  backPage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if (this.service.PackRoot == "trangcuatoi") {
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
  GetListVideo() {
    this.service.GetanswersheetsMchartR(this.service.getHost() + 'intervention/posts/featured?skip=' + this.skip + '&take=10&sort=-createdAt').subscribe
      (rs => {
        var result = rs.json();
        for (var i = 0; i < result.items.length; i++) {
          var video = [];
          if (result.items[i].videos.length == 0) {
            video.push({
              "_id": "",
              "url": "",
              "caption": null,
              "hidden": false,
              check: false
            });
          }
          else {
            result.items[i].videos.forEach(element => {
              var url = element.url.replace("https://youtu.be/", "https://www.youtube.com/embed/")
              video.push({
                "_id": element._id,
                "url": element.url,
                "caption": element.caption,
                "hidden": element.hidden,
                check: false
              });
            });
          }
          this.listvideo.push({
            "backgroundImages": result.items[i].backgroundImages,
            "title": result.items[i].title,
            "description": result.items[i].description,
            "videos": video,
            "content": result.items[i].content,
            "id": result.items[i].id,
          })
        }
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
      }, error => {
        if (this.service.CheckLoading) {
          this.service.CheckLoading = false;
          this.toast.DismissToast();
        };
      });
  }
  ViewVideo(data) {
    if (data.videos[0].url == '') {
      this.service.message("Bạn không được phép truy cập bài này!")
    }
    else {
      let navigationExtras: NavigationExtras = {
        queryParams: data.videos[0].url,
      };
      this.router.navigate(['/video-view'], navigationExtras);
    }
  }
  ViewVideoData(data) {
    debugger
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/video-view'], navigationExtras);
  }
  doRefresh(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = 0;
    this.listvideo = [];
    this.GetListVideo();
    event.target.complete();
  }
  loadData(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = this.skip + 10;
    this.GetListVideo();
    event.target.complete();
  }
}
