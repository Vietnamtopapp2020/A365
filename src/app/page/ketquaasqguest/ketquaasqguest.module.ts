import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaasqguestPageRoutingModule } from './ketquaasqguest-routing.module';

import { KetquaasqguestPage } from './ketquaasqguest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaasqguestPageRoutingModule
  ],
  declarations: [KetquaasqguestPage]
})
export class KetquaasqguestPageModule {}
