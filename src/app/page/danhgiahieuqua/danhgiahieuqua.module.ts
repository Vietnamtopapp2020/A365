import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanhgiahieuquaPageRoutingModule } from './danhgiahieuqua-routing.module';

import { DanhgiahieuquaPage } from './danhgiahieuqua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanhgiahieuquaPageRoutingModule
  ],
  declarations: [DanhgiahieuquaPage]
})
export class DanhgiahieuquaPageModule {}
