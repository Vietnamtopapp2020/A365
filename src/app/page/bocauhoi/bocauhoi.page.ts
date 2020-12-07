import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { CautraloiPage } from '../cautraloi/cautraloi.page';

@Component({
  selector: 'app-bocauhoi',
  templateUrl: './bocauhoi.page.html',
  styleUrls: ['./bocauhoi.page.scss'],
})
export class BocauhoiPage implements OnInit {
  data: any;
  check = '';
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
  ) {
    this.service.Page = "";


    this.data = this.router.getCurrentNavigation().extras.queryParams;
  }


  ngOnInit() {
  }
  backPage() {
    this.router.navigate(['/cauhoithuonggap']);
  }
  openQuest(data) {
    data.checkOpen = !data.checkOpen;
  }
  async moveTofirstStaff(data) {
    const myModal = await this.modalController.create({
      component: CautraloiPage,
      componentProps: {
        data
      },
      cssClass: "modaldetail"
    });
    return await myModal.present();
  }
}
