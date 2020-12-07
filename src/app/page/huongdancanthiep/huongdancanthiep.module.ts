import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuongdancanthiepPageRoutingModule } from './huongdancanthiep-routing.module';

import { HuongdancanthiepPage } from './huongdancanthiep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuongdancanthiepPageRoutingModule
  ],
  declarations: [HuongdancanthiepPage]
})
export class HuongdancanthiepPageModule {}
