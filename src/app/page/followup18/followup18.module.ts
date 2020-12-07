import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup18PageRoutingModule } from './followup18-routing.module';

import { Followup18Page } from './followup18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup18PageRoutingModule
  ],
  declarations: [Followup18Page]
})
export class Followup18PageModule {}
