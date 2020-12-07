import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaviewasqPageRoutingModule } from './ketquaviewasq-routing.module';

import { KetquaviewasqPage } from './ketquaviewasq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaviewasqPageRoutingModule
  ],
  declarations: [KetquaviewasqPage]
})
export class KetquaviewasqPageModule {}
