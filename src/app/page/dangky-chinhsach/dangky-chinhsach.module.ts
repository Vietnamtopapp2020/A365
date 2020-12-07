import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangkyChinhsachPageRoutingModule } from './dangky-chinhsach-routing.module';

import { DangkyChinhsachPage } from './dangky-chinhsach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangkyChinhsachPageRoutingModule
  ],
  declarations: [DangkyChinhsachPage]
})
export class DangkyChinhsachPageModule {}
