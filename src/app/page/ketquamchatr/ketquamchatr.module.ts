import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquamchatrPageRoutingModule } from './ketquamchatr-routing.module';

import { KetquamchatrPage } from './ketquamchatr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquamchatrPageRoutingModule
  ],
  declarations: [KetquamchatrPage]
})
export class KetquamchatrPageModule {}
