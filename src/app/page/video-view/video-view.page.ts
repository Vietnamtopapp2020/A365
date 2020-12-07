import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.page.html',
  styleUrls: ['./video-view.page.scss'],
})
export class VideoViewPage implements OnInit {
  data: any;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    private sanitizer: DomSanitizer,
    public service: ServiceService
  ) {
    this.service.Page = "";
    this.data = this.router.getCurrentNavigation().extras.queryParams;
  }

  ngOnInit() {
  }
  backpage() {
    this.navCtrl.pop()
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("https://youtu.be/", "https://www.youtube.com/embed/"));
  }
}
