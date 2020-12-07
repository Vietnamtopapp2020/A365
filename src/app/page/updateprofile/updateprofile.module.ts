import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilePageRoutingModule } from './updateprofile-routing.module';

import { UpdateprofilePage } from './updateprofile.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    UpdateprofilePageRoutingModule
  ],
  declarations: [UpdateprofilePage]
})
export class UpdateprofilePageModule {}
