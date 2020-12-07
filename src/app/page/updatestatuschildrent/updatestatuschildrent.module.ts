import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatestatuschildrentPageRoutingModule } from './updatestatuschildrent-routing.module';

import { UpdatestatuschildrentPage } from './updatestatuschildrent.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatestatuschildrentPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [UpdatestatuschildrentPage]
})
export class UpdatestatuschildrentPageModule {}
