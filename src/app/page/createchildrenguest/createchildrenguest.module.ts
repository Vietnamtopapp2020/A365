import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatechildrenguestPageRoutingModule } from './createchildrenguest-routing.module';

import { CreatechildrenguestPage } from './createchildrenguest.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    CreatechildrenguestPageRoutingModule
  ],
  declarations: [CreatechildrenguestPage]
})
export class CreatechildrenguestPageModule {}
