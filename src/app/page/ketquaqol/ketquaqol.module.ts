import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaqolPageRoutingModule } from './ketquaqol-routing.module';

import { KetquaqolPage } from './ketquaqol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaqolPageRoutingModule
  ],
  declarations: [KetquaqolPage]
})
export class KetquaqolPageModule {}
