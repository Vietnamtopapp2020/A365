import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanhsachtrePageRoutingModule } from './danhsachtre-routing.module';

import { DanhsachtrePage } from './danhsachtre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanhsachtrePageRoutingModule
  ],
  declarations: [DanhsachtrePage]
})
export class DanhsachtrePageModule {}
