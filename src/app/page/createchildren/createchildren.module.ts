import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatechildrenPageRoutingModule } from './createchildren-routing.module';

import { CreatechildrenPage } from './createchildren.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatechildrenPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [CreatechildrenPage]
})
export class CreatechildrenPageModule {}
