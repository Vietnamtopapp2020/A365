import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup12PageRoutingModule } from './followup12-routing.module';

import { Followup12Page } from './followup12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup12PageRoutingModule
  ],
  declarations: [Followup12Page]
})
export class Followup12PageModule {}
