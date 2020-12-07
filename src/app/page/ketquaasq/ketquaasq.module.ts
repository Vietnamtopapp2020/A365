import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaasqPageRoutingModule } from './ketquaasq-routing.module';

import { KetquaasqPage } from './ketquaasq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaasqPageRoutingModule
  ],
  declarations: [KetquaasqPage]
})
export class KetquaasqPageModule {}
