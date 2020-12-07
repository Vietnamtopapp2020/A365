import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileanswesguestmchatrPageRoutingModule } from './profileanswesguestmchatr-routing.module';

import { ProfileanswesguestmchatrPage } from './profileanswesguestmchatr.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ProfileanswesguestmchatrPageRoutingModule
  ],
  declarations: [ProfileanswesguestmchatrPage]
})
export class ProfileanswesguestmchatrPageModule {}
