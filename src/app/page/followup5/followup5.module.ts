import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup5PageRoutingModule } from './followup5-routing.module';

import { Followup5Page } from './followup5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup5PageRoutingModule
  ],
  declarations: [Followup5Page]
})
export class Followup5PageModule {}
