import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';

@Component({
  selector: 'app-dash-board-p2',
  templateUrl: './dash-board-p2.page.html',
  styleUrls: ['./dash-board-p2.page.scss'],
})
export class DashBoardP2Page implements OnInit {
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
    this.CheckControl = true;
    this.checkNhatky = this.result.checkNhatky;
    this.openTsetCheck = this.result.openTsetCheck;
    this.ObjectPage = this.result.ObjectPage;
  }

  ngOnInit() {
  }
  // onSwipeLeft($event) {
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
  ListchildrenCDC() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          page: this.result.page
        }
      };
      if (this.ObjectPage.isEligibleForCdc == true) {
        this.CloseModal();
        this.router.navigate(['/cdc'], navigationExtras);

      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.CloseModal();
      this.router.navigate(['/listchildren-cdc']);
    }
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
        this.router.navigate(['/asqtest'], navigationExtras);
        this.CloseModal();
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
  ListchildrenMCHATRF() {
    if (this.ObjectPage != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          ObjectPage: this.ObjectPage,
          pageKQ: this.result.page
        }
      };
      if (this.ObjectPage.isEligibleForMchatr == true) {
        this.router.navigate(['/mchatr-f'], navigationExtras);
        this.CloseModal();
      }
      else {
        this.service.message("Trẻ không đủ điều kiện làm bài test");
      }

    }
    else {
      this.CloseModal();
      this.router.navigate(['/listchildrenmchatrf']);
    }
  }
  Nhatky() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.ObjectPage
    };
    this.router.navigate(['/nhatkycanthiep'], navigationExtras);
    this.CloseModal();

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
