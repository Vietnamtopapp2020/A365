import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCDCPageRoutingModule } from './update-cdc-routing.module';

import { UpdateCDCPage } from './update-cdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCDCPageRoutingModule
  ],
  declarations: [UpdateCDCPage]
})
export class UpdateCDCPageModule {}
