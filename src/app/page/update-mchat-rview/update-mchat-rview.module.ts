import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMchatRViewPageRoutingModule } from './update-mchat-rview-routing.module';

import { UpdateMchatRViewPage } from './update-mchat-rview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMchatRViewPageRoutingModule
  ],
  declarations: [UpdateMchatRViewPage]
})
export class UpdateMchatRViewPageModule {}
