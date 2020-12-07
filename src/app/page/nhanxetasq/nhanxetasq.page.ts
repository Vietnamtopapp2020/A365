import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
@Component({
  selector: 'app-nhanxetasq',
  templateUrl: './nhanxetasq.page.html',
  styleUrls: ['./nhanxetasq.page.scss'],
})
export class NhanxetasqPage implements OnInit {
  data: any
  name = '';
  TitletHard = [];
  TitleFollow = [];
  TitletNormal = [];
  TitletNormalShow = "hidden";
  TitleFollowShow = "hidden";
  TitletHardShow = "hidden";
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public service: ServiceService,
    public modalController: ModalController,
    private navPamra: NavParams,
  ) {
    this.data = this.navPamra.data;
    this.name = this.data.name;
    this.TitleFollow = this.data.TitleFollow;
    this.TitletHard = this.data.TitletHard;
    this.TitletNormal = this.data.TitletNormal
    if (this.TitleFollow.length != 0) {
      this.TitleFollowShow = ""
    }
    if (this.TitletHard.length != 0) {
      this.TitletHardShow = ""
    }
    if (this.TitletNormal.length != 0) {
      this.TitletNormalShow = ""
    }
  }
  ngOnInit() {
  }
  backpage() {
    this.modalController.dismiss();
  }
}
