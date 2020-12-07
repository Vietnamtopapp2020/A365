import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup1PageRoutingModule } from './followup1-routing.module';

import { Followup1Page } from './followup1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup1PageRoutingModule
  ],
  declarations: [Followup1Page]
})
export class Followup1PageModule {}
