import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { MenuController, NavController } from '@ionic/angular';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { element } from 'protractor';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-video-reference',
  templateUrl: './video-reference.page.html',
  styleUrls: ['./video-reference.page.scss'],
})
export class VideoReferencePage implements OnInit {
  listvideo = [];
  video = [];
  take = 10;
  skip = 0;
  constructor(
    public service: ServiceService,
    public navCtrl: NavController,
    public toast: ToastServiceService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private menuCtrl: MenuController,
    public netWork: Network

  ) {
    this.service.Page = "";

    this.GetCDR();
  }
  ngOnInit() {
  }
  GetCDR() {
    if (this.netWork.type.toUpperCase() != "NONE") {
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
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("https://youtu.be/", "https://www.youtube.com/embed/"));
  }
  ViewVideo(data) {
    if (data.videos[0].url == '') {
      this.service.message("Bạn không được phép truy cập bài này!")
    }
    else {
      let navigationExtras: NavigationExtras = {
        queryParams: data.videos[0].url
      };
      this.router.navigate(['/video-view'], navigationExtras);
    }
  }
  doRefresh(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = 0;
    this.listvideo = [];
    this.GetCDR();
    event.target.complete();
  }
  loadData(event) {
    if (!this.service.CheckLoading) {
      this.toast.showLoading("");
      this.service.CheckLoading = true;
    }
    this.skip = this.skip + 10;
    this.GetCDR();
    event.target.complete();
  }
  backpage() {
    this.menuCtrl.open();
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
