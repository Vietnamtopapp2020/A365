import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup4PageRoutingModule } from './followup4-routing.module';

import { Followup4Page } from './followup4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup4PageRoutingModule
  ],
  declarations: [Followup4Page]
})
export class Followup4PageModule {}
