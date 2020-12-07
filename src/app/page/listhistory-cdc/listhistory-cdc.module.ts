import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryCDCPageRoutingModule } from './listhistory-cdc-routing.module';

import { ListhistoryCDCPage } from './listhistory-cdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryCDCPageRoutingModule
  ],
  declarations: [ListhistoryCDCPage]
})
export class ListhistoryCDCPageModule {}
