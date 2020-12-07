import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMchatRPageRoutingModule } from './update-mchat-r-routing.module';

import { UpdateMchatRPage } from './update-mchat-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMchatRPageRoutingModule
  ],
  declarations: [UpdateMchatRPage]
})
export class UpdateMchatRPageModule {}
