import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QolPageRoutingModule } from './qol-routing.module';

import { QolPage } from './qol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QolPageRoutingModule
  ],
  declarations: [QolPage]
})
export class QolPageModule {}
