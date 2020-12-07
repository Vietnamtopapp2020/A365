import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuongdancanthiepDetailPageRoutingModule } from './huongdancanthiep-detail-routing.module';

import { HuongdancanthiepDetailPage } from './huongdancanthiep-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuongdancanthiepDetailPageRoutingModule
  ],
  declarations: [HuongdancanthiepDetailPage]
})
export class HuongdancanthiepDetailPageModule {}
