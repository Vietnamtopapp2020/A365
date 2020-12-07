import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Followup16PageRoutingModule } from './followup16-routing.module';

import { Followup16Page } from './followup16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Followup16PageRoutingModule
  ],
  declarations: [Followup16Page]
})
export class Followup16PageModule {}
