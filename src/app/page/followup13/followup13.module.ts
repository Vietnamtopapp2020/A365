import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup13PageRoutingModule } from './followup13-routing.module';

import { Followup13Page } from './followup13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup13PageRoutingModule
  ],
  declarations: [Followup13Page]
})
export class Followup13PageModule {}
