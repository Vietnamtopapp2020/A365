import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQOLPageRoutingModule } from './update-qol-routing.module';

import { UpdateQOLPage } from './update-qol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQOLPageRoutingModule
  ],
  declarations: [UpdateQOLPage]
})
export class UpdateQOLPageModule {}
