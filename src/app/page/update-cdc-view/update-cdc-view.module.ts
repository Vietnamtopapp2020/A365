import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCdcViewPageRoutingModule } from './update-cdc-view-routing.module';

import { UpdateCdcViewPage } from './update-cdc-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCdcViewPageRoutingModule
  ],
  declarations: [UpdateCdcViewPage]
})
export class UpdateCdcViewPageModule {}
