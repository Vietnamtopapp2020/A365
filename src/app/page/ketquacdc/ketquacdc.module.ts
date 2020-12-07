import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquacdcPageRoutingModule } from './ketquacdc-routing.module';

import { KetquacdcPage } from './ketquacdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquacdcPageRoutingModule
  ],
  declarations: [KetquacdcPage]
})
export class KetquacdcPageModule {}
