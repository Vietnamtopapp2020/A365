import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepDanhgiaPageRoutingModule } from './nhatkycanthiep-danhgia-routing.module';

import { NhatkycanthiepDanhgiaPage } from './nhatkycanthiep-danhgia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhatkycanthiepDanhgiaPageRoutingModule
  ],
  declarations: [NhatkycanthiepDanhgiaPage]
})
export class NhatkycanthiepDanhgiaPageModule {}
