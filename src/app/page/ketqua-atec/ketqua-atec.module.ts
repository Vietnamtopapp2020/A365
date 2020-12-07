import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaATECPageRoutingModule } from './ketqua-atec-routing.module';

import { KetquaATECPage } from './ketqua-atec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaATECPageRoutingModule
  ],
  declarations: [KetquaATECPage]
})
export class KetquaATECPageModule {}
