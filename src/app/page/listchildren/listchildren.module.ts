import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListchildrenPageRoutingModule } from './listchildren-routing.module';

import { ListchildrenPage } from './listchildren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListchildrenPageRoutingModule
  ],
  declarations: [ListchildrenPage]
})
export class ListchildrenPageModule {}
