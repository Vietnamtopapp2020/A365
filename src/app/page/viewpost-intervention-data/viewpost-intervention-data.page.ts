import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { DangkiPage } from '../dangki/dangki.page';
import { ModalController, NavParams, NavController, Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-viewpost-intervention-data',
  templateUrl: './viewpost-intervention-data.page.html',
  styleUrls: ['./viewpost-intervention-data.page.scss'],
})
export class ViewpostInterventionDataPage implements OnInit {
  data: any;
  listview: any;
  title: any;
  conten: any;
  video: any;
  img: any;
  check: false
  createat: any;
  constructor(
    public navCtr: NavController,
    public service: ServiceService,
    public router: Router,
    public toast: ToastServiceService,
    private sanitizer: DomSanitizer,
    public netWork: Network
  ) {
    this.service.Page = "";


    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.title = this.data.list.title;
    this.conten = this.data.conten;
    if (this.data.list.videos.length == 0) {
      this.video = ''
    }
    else {
      this.video = this.data.list.videos[0].url.replace("https://youtu.be/", "https://www.youtube.com/embed/")
    }

    this.img = this.data.list,
      this.createat = moment(this.data.list.updatedAt).format("DD-MM-YYYY")

  }

  ngOnInit() {
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  transform(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.replace("https://youtu.be/", "https://www.youtube.com/embed/"));
  }
  Viewpost() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.GetanswersheetsCDC(this.service.getHost() + "intervention/" + 'postView?child=' + this.data.child + "post=" + this.data.post).subscribe(rs => {
        this.listview = rs.json();
      })
    } else {
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
}
