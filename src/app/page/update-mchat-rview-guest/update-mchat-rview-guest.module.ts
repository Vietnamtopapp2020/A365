import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMchatRViewGuestPageRoutingModule } from './update-mchat-rview-guest-routing.module';

import { UpdateMchatRViewGuestPage } from './update-mchat-rview-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMchatRViewGuestPageRoutingModule
  ],
  declarations: [UpdateMchatRViewGuestPage]
})
export class UpdateMchatRViewGuestPageModule {}
