import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup10PageRoutingModule } from './followup10-routing.module';

import { Followup10Page } from './followup10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup10PageRoutingModule
  ],
  declarations: [Followup10Page]
})
export class Followup10PageModule {}
