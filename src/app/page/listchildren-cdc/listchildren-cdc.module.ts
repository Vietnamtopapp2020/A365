import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListchildrenCDCPageRoutingModule } from './listchildren-cdc-routing.module';

import { ListchildrenCDCPage } from './listchildren-cdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListchildrenCDCPageRoutingModule
  ],
  declarations: [ListchildrenCDCPage]
})
export class ListchildrenCDCPageModule {}
