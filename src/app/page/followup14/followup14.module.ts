import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup14PageRoutingModule } from './followup14-routing.module';

import { Followup14Page } from './followup14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup14PageRoutingModule
  ],
  declarations: [Followup14Page]
})
export class Followup14PageModule {}
