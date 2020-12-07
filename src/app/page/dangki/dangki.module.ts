import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangkiPageRoutingModule } from './dangki-routing.module';

import { DangkiPage } from './dangki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangkiPageRoutingModule
  ],
  declarations: [DangkiPage]
})
export class DangkiPageModule {}
