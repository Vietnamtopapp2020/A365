import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup19PageRoutingModule } from './followup19-routing.module';

import { Followup19Page } from './followup19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup19PageRoutingModule
  ],
  declarations: [Followup19Page]
})
export class Followup19PageModule {}
