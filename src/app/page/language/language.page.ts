import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage {
 
  GetNewWork() {
    this.router.navigate(["/time-keeping"]);
  }
  backPage() {

    this.navCtrl.navigateRoot('/dash-board');
  }
  async openMenuPage(p) {
   
    this.service.openMenuPage(p);
  }

  public title: String;
  public language: string;
  ListLanguage = [
    {
      Code: "en",
      Valuse: "English",
      DefaultPayment: true,
      src: "assets/imgs/iconen.png"
    },
    {
      Code: "vi",
      Valuse: "Tiếng Việt",
      DefaultPayment: true,
      src: "assets/imgs/iconvi.png"
    },
    {
      Code: "ja",
      Valuse: "Japan",
      DefaultPayment: true,
      src: "assets/imgs/coNhat.png"
    },
    {
      Code: "fr",
      Valuse: "France",
      DefaultPayment: true,
      src: "assets/imgs/coPhap.png"
    },
    {
      Code: "ko",
      Valuse: "Korean",
      DefaultPayment: true,
      src: "assets/imgs/han.jpg"
    },
    {
      Code: "zh",
      Valuse: "China",
      DefaultPayment: true,
      src: "assets/imgs/china.png"
    },
    {
      Code: "ca",
      Valuse: "Campuchia",
      DefaultPayment: true,
      src: "assets/imgs/cambodia.png"
    },
    {
      Code: "mm",
      Valuse: "Myanma",
      DefaultPayment: true,
      src: "assets/imgs/myanmar.png"
    },
    {
      Code: "la",
      Valuse: "Laos",
      DefaultPayment: true,
      src: "assets/imgs/Laos.jpg"
    },
  ]
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    public service: ServiceService,
    private router: Router,
    public modalCtrl : ModalController

    ) {  this.service.Page = "";

    this.storage.get('language').then((val1) => {
      this.ListLanguage.forEach(element => {

        if (element.Code == val1.language) {
          element.DefaultPayment = false;
        }
      });
    });
  }

  SetLanguageDefault(z) {
  
  }
}
