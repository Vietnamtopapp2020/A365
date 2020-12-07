import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup2PageRoutingModule } from './followup2-routing.module';

import { Followup2Page } from './followup2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup2PageRoutingModule
  ],
  declarations: [Followup2Page]
})
export class Followup2PageModule {}
