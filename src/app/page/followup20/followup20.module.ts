import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup20PageRoutingModule } from './followup20-routing.module';

import { Followup20Page } from './followup20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup20PageRoutingModule
  ],
  declarations: [Followup20Page]
})
export class Followup20PageModule {}
