import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuongdansudungPageRoutingModule } from './huongdansudung-routing.module';

import { HuongdansudungPage } from './huongdansudung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuongdansudungPageRoutingModule
  ],
  declarations: [HuongdansudungPage]
})
export class HuongdansudungPageModule {}
