import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.page.html',
  styleUrls: ['./introduce.page.scss'],
})
export class IntroducePage implements OnInit {
  Data = null;
  introduction: string;
  slideOptsImg = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000,
  };
  constructor(
    public navCtrl: NavController,
    public service: ServiceService,
    private sanitizer: DomSanitizer,
    public router: Router
  ) {
    
    this.Data = this.router.getCurrentNavigation().extras.queryParams;
  }
  ngOnInit() {
  }
  backPage() {
    this.navCtrl.pop();
  }
  transform(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
}
