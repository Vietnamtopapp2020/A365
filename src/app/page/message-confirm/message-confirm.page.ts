import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';


@Component({
  selector: 'app-message-confirm',
  templateUrl: './message-confirm.page.html',
  styleUrls: ['./message-confirm.page.scss'],
})
export class MessageConfirmPage {
  message: any;
  p;
  constructor(public navCtrl: NavController,
    private navPamra: NavParams,
    private modalController: ModalController,
    public service: ServiceService
  ) {
    this.message = this.navPamra.get("p");
  }
  btnOk() {
    this.modalController.dismiss(true);
  }
  btnCannel() {
    this.modalController.dismiss();
  }

}
