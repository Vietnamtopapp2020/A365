import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAnswesguestPageRoutingModule } from './profile-answesguest-routing.module';

import { ProfileAnswesguestPage } from './profile-answesguest.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ProfileAnswesguestPageRoutingModule
  ],
  declarations: [ProfileAnswesguestPage]
})
export class ProfileAnswesguestPageModule {}
