import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrangcuatoiPageRoutingModule } from './trangcuatoi-routing.module';

import { TrangcuatoiPage } from './trangcuatoi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrangcuatoiPageRoutingModule
  ],
  declarations: [TrangcuatoiPage]
})
export class TrangcuatoiPageModule {}
