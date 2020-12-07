import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-huongdancanthiep-baiviet',
  templateUrl: './huongdancanthiep-baiviet.page.html',
  styleUrls: ['./huongdancanthiep-baiviet.page.scss'],
})
export class HuongdancanthiepBaivietPage implements OnInit {
  data: any;
  title: any;
  conten: any;
  video: any;
  img: any;
  createat: any;
  textSplit: any[] = [];
  textSplit1: any[] = [];
  textSplit2: any[] = [];
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public modalCtrl: ModalController,
    public router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.service.Page = "";


    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.title = this.data.list.title;
    var n = this.data.conten.search('<li class="ql-align-justify">');
    if (n == -1) {
      this.conten = this.data.conten;
    }
    else {
      var textView = "";
      var textView1 = "";
      var textView2 = "";
      this.textSplit = this.data.conten.split('<li class="ql-align-justify">')
      for (let i = 0; i < this.textSplit.length - 1; i++) {
        textView = textView + this.textSplit[i] + '<li class="ql-align-justify">* ';
      }
      this.conten = textView + this.textSplit[this.textSplit.length - 1];
    }
    if (this.data.list.videos.length == 0) {
      this.video = ''
    }
    else {
      this.video = this.data.list.videos[0].url.replace("https://youtu.be/", "https://www.youtube.com/embed/")
    }

    this.img = this.data.list,
      this.createat = moment(this.data.list.updatedAt).format("DD-MM-YYYY")
  }
  transform(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.replace("https://youtu.be/", "https://www.youtube.com/embed/"));
  }
  ngOnInit() {
  }
}
