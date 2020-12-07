import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KienthucchudePageRoutingModule } from './kienthucchude-routing.module';

import { KienthucchudePage } from './kienthucchude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KienthucchudePageRoutingModule
  ],
  declarations: [KienthucchudePage]
})
export class KienthucchudePageModule {}
