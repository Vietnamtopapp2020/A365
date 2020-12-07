import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocauhoiPageRoutingModule } from './bocauhoi-routing.module';

import { BocauhoiPage } from './bocauhoi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BocauhoiPageRoutingModule
  ],
  declarations: [BocauhoiPage]
})
export class BocauhoiPageModule {}
