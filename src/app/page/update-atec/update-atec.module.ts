import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateATECPageRoutingModule } from './update-atec-routing.module';

import { UpdateATECPage } from './update-atec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateATECPageRoutingModule
  ],
  declarations: [UpdateATECPage]
})
export class UpdateATECPageModule {}
