import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangcauhoiasqPageRoutingModule } from './bangcauhoiasq-routing.module';

import { BangcauhoiasqPage } from './bangcauhoiasq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangcauhoiasqPageRoutingModule
  ],
  declarations: [BangcauhoiasqPage]
})
export class BangcauhoiasqPageModule {}
