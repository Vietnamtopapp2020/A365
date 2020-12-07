import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatechildrenPageRoutingModule } from './updatechildren-routing.module';

import { UpdatechildrenPage } from './updatechildren.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatechildrenPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [UpdatechildrenPage]
})
export class UpdatechildrenPageModule {}
