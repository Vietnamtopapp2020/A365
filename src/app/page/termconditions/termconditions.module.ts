import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermconditionsPageRoutingModule } from './termconditions-routing.module';

import { TermconditionsPage } from './termconditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermconditionsPageRoutingModule
  ],
  declarations: [TermconditionsPage]
})
export class TermconditionsPageModule {}
