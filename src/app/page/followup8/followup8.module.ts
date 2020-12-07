import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup8PageRoutingModule } from './followup8-routing.module';

import { Followup8Page } from './followup8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup8PageRoutingModule
  ],
  declarations: [Followup8Page]
})
export class Followup8PageModule {}
