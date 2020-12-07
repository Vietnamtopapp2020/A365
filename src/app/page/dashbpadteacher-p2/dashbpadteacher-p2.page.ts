import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';
@Component({
  selector: 'app-dashbpadteacher-p2',
  templateUrl: './dashbpadteacher-p2.page.html',
  styleUrls: ['./dashbpadteacher-p2.page.scss'],
})
export class DashbpadteacherP2Page implements OnInit {
  // @ViewChild('box') box: ElementRef;
  CheckControl = true;
  checkNhatky = false;
  openTsetCheck = false;
  ObjectPage = null;
  result: any;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public router: Router,
    public service: ServiceService,
    public toast: ToastServiceService,
    public netWork: Network
  ) {
    
    this.result = this.navParams.data;
    this.checkNhatky = this.result.checkNhatky;
    this.openTsetCheck = this.result.openTsetCheck;
    this.ObjectPage = this.result.ObjectPage;
  }

  ngOnInit() {
  }
  // onSwipeLeft() {
  onSwipeLeft() {
    // this.box.nativeElement.classList.add('magictime');
    // this.box.nativeElement.classList.add('slideDown');
    // setTimeout(() => {
      this.CheckControl = false;
      this.CloseModal();
    // }, 500);
  }
  CloseModal() {
    this.modalCtrl.dismiss();
  }
  ListchildrenASQ() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          pageKQ: this.result.page
        }
      };
      if (this.ObjectPage.isEligibleForAsq == true) {
        this.CloseModal();
        this.router.navigate(['/asqtest'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.CloseModal();
      this.router.navigate(['/list-children-asq']);
    }
  }
  ListchildrenMCHATR() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          pageKQ: this.result.page
        }
      };
      if (this.ObjectPage.isEligibleForMchatr == true) {
        this.CloseModal();
        this.router.navigate(['/mchar-r'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }
    }
    else {
      this.CloseModal();
      this.router.navigate(['/listchildren']);
    }
  }
  Nhatky() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.ObjectPage
    };
    this.CloseModal();
    this.router.navigate(['/nhatkycanthiep'], navigationExtras);

  }
  ListchildrenQOL() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams:
        {
          ObjectPage: this.ObjectPage,
          pageKQ: this.result.page
        }
      };
      if (this.ObjectPage.isEligibleForQol == true) {
        this.CloseModal();
        this.router.navigate(['/qol'], navigationExtras);
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }
    }
    else {
      this.CloseModal();
      this.router.navigate(['/listchildren-qol']);
    }
  }
  Update() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.ObjectPage
    };
    this.router.navigate(['/updatechildren'], navigationExtras);
    this.CloseModal();
  }
  checkModal = true;
  async deletechildren() {
    this.modalCtrl.dismiss("DELETE")
  }
}
