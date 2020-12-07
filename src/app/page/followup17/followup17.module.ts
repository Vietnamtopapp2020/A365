import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup17PageRoutingModule } from './followup17-routing.module';

import { Followup17Page } from './followup17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup17PageRoutingModule
  ],
  declarations: [Followup17Page]
})
export class Followup17PageModule {}
