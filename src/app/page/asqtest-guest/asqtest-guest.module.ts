import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsqtestGuestPageRoutingModule } from './asqtest-guest-routing.module';

import { AsqtestGuestPage } from './asqtest-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsqtestGuestPageRoutingModule
  ],
  declarations: [AsqtestGuestPage]
})
export class AsqtestGuestPageModule {}
