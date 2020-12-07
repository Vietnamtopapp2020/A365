import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup11PageRoutingModule } from './followup11-routing.module';

import { Followup11Page } from './followup11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup11PageRoutingModule
  ],
  declarations: [Followup11Page]
})
export class Followup11PageModule {}
