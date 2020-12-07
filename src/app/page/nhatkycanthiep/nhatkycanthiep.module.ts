import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepPageRoutingModule } from './nhatkycanthiep-routing.module';

import { NhatkycanthiepPage } from './nhatkycanthiep.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhatkycanthiepPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [NhatkycanthiepPage]
})
export class NhatkycanthiepPageModule {}
