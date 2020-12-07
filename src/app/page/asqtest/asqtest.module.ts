import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsqtestPageRoutingModule } from './asqtest-routing.module';

import { AsqtestPage } from './asqtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsqtestPageRoutingModule
  ],
  declarations: [AsqtestPage]
})
export class AsqtestPageModule {}
