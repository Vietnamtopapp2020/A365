import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListchildrenQOLPageRoutingModule } from './listchildren-qol-routing.module';

import { ListchildrenQOLPage } from './listchildren-qol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListchildrenQOLPageRoutingModule
  ],
  declarations: [ListchildrenQOLPage]
})
export class ListchildrenQOLPageModule {}
