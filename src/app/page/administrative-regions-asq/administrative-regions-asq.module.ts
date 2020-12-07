import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsASQPageRoutingModule } from './administrative-regions-asq-routing.module';

import { AdministrativeRegionsASQPage } from './administrative-regions-asq.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativeRegionsASQPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AdministrativeRegionsASQPage]
})
export class AdministrativeRegionsASQPageModule {}
