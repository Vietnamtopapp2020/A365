import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CauhoithuonggapPageRoutingModule } from './cauhoithuonggap-routing.module';

import { CauhoithuonggapPage } from './cauhoithuonggap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CauhoithuonggapPageRoutingModule
  ],
  declarations: [CauhoithuonggapPage]
})
export class CauhoithuonggapPageModule {}
