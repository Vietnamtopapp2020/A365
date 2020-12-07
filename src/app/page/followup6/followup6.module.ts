import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup6PageRoutingModule } from './followup6-routing.module';

import { Followup6Page } from './followup6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup6PageRoutingModule
  ],
  declarations: [Followup6Page]
})
export class Followup6PageModule {}
