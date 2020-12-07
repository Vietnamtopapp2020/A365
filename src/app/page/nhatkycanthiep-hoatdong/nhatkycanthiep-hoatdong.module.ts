import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepHoatdongPageRoutingModule } from './nhatkycanthiep-hoatdong-routing.module';

import { NhatkycanthiepHoatdongPage } from './nhatkycanthiep-hoatdong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhatkycanthiepHoatdongPageRoutingModule
  ],
  declarations: [NhatkycanthiepHoatdongPage]
})
export class NhatkycanthiepHoatdongPageModule {}
