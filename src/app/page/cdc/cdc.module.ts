import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdcPageRoutingModule } from './cdc-routing.module';

import { CdcPage } from './cdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdcPageRoutingModule
  ],
  declarations: [CdcPage]
})
export class CdcPageModule {}
