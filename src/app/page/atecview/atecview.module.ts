import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtecviewPageRoutingModule } from './atecview-routing.module';

import { AtecviewPage } from './atecview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtecviewPageRoutingModule
  ],
  declarations: [AtecviewPage]
})
export class AtecviewPageModule {}
