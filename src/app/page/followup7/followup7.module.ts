import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup7PageRoutingModule } from './followup7-routing.module';

import { Followup7Page } from './followup7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup7PageRoutingModule
  ],
  declarations: [Followup7Page]
})
export class Followup7PageModule {}
