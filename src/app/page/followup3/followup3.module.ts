import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup3PageRoutingModule } from './followup3-routing.module';

import { Followup3Page } from './followup3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup3PageRoutingModule
  ],
  declarations: [Followup3Page]
})
export class Followup3PageModule {}
