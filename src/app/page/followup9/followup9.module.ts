import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup9PageRoutingModule } from './followup9-routing.module';

import { Followup9Page } from './followup9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup9PageRoutingModule
  ],
  declarations: [Followup9Page]
})
export class Followup9PageModule {}
