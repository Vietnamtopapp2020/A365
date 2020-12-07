import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquamchatrfPageRoutingModule } from './ketquamchatrf-routing.module';

import { KetquamchatrfPage } from './ketquamchatrf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquamchatrfPageRoutingModule
  ],
  declarations: [KetquamchatrfPage]
})
export class KetquamchatrfPageModule {}
