import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatechildrenguestmchatrPageRoutingModule } from './createchildrenguestmchatr-routing.module';

import { CreatechildrenguestmchatrPage } from './createchildrenguestmchatr.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    CreatechildrenguestmchatrPageRoutingModule
  ],
  declarations: [CreatechildrenguestmchatrPage]
})
export class CreatechildrenguestmchatrPageModule {}
