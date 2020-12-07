import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  toast: ToastController
  loading: any;

  constructor(public http: Http,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
  ) {
  }
  async showLoading(msg) {
    const loading = await this.loadingCtrl.create({
      message: msg,
      duration: 60000
    });
    await loading.present();
  }
  async showLoadingNext(msg) {
    const loading = await this.loadingCtrl.create({
      message: msg,
      duration: 200
    });
    await loading.present();
  }
  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    await toast.present();
  }
  async DismissToast() {
    this.loadingCtrl.dismiss();
  }
}
