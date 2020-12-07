import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMchatRfViewPageRoutingModule } from './update-mchat-rf-view-routing.module';

import { UpdateMchatRfViewPage } from './update-mchat-rf-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMchatRfViewPageRoutingModule
  ],
  declarations: [UpdateMchatRfViewPage]
})
export class UpdateMchatRfViewPageModule {}
