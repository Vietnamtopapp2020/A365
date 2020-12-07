import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  constructor(
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navCtr: NavController,
    public modalController: ModalController,
    ) {  this.service.Page = "";


  }

  historyASQ() {
    this.router.navigate(['/listhistory-asq']);
  }
  historyCDC() {
    this.router.navigate(['/listhistory-cdc']);
  }
  historyMchatR() {
    this.router.navigate(['/listhistory-mchat-r']);
  }
  historyMchatRF() {
    this.router.navigate(['/listhistory-mchat-rf']);
  }
  historyATEC() {
    this.router.navigate(['/listhistory-atec']);
  }
  historyQOL() {
    this.router.navigate(['/listhistory-qol']);
  }
  ngOnInit() {
  }
  backPage() {

    // if (this.service.Role == 1) {
    //   this.router.navigate(['/doashboadparent'])
    // }
    // else if (this.service.Role == 2) {
    //   this.router.navigate(['/dashboard'])
    // }
    // else {
    //   this.router.navigate(['/dashboadteacher'])
    // }
    this.router.navigate(['/trangcuatoi'])
  }
}

