import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup15PageRoutingModule } from './followup15-routing.module';

import { Followup15Page } from './followup15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup15PageRoutingModule
  ],
  declarations: [Followup15Page]
})
export class Followup15PageModule {}
