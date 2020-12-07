import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMchatRFPageRoutingModule } from './update-mchat-rf-routing.module';

import { UpdateMchatRFPage } from './update-mchat-rf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMchatRFPageRoutingModule
  ],
  declarations: [UpdateMchatRFPage]
})
export class UpdateMchatRFPageModule {}
