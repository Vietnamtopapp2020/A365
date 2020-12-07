import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHealthfacilitiPageRoutingModule } from './list-healthfaciliti-routing.module';

import { ListHealthfacilitiPage } from './list-healthfaciliti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHealthfacilitiPageRoutingModule
  ],
  declarations: [ListHealthfacilitiPage]
})
export class ListHealthfacilitiPageModule {}
