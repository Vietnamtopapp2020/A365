import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cautraloi',
  templateUrl: './cautraloi.page.html',
  styleUrls: ['./cautraloi.page.scss'],
})
export class CautraloiPage implements OnInit {
  data = null;

  constructor(
    public navCtr: NavController,
    public modalCtrl: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    public navParams: NavParams,
    ) {  this.service.Page = "";

    
    this.data = this.navParams.data;
   }
   backPage() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }
  

}
