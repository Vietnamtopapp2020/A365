import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KienthucchuyenmonPageRoutingModule } from './kienthucchuyenmon-routing.module';

import { KienthucchuyenmonPage } from './kienthucchuyenmon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KienthucchuyenmonPageRoutingModule
  ],
  declarations: [KienthucchuyenmonPage]
})
export class KienthucchuyenmonPageModule {}
