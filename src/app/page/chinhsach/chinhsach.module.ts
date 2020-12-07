import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinhsachPageRoutingModule } from './chinhsach-routing.module';

import { ChinhsachPage } from './chinhsach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinhsachPageRoutingModule
  ],
  declarations: [ChinhsachPage]
})
export class ChinhsachPageModule {}
