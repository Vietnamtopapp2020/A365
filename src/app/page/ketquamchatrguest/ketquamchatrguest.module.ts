import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquamchatrguestPageRoutingModule } from './ketquamchatrguest-routing.module';

import { KetquamchatrguestPage } from './ketquamchatrguest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquamchatrguestPageRoutingModule
  ],
  declarations: [KetquamchatrguestPage]
})
export class KetquamchatrguestPageModule {}
