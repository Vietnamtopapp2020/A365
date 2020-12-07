import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsMCHATRFPageRoutingModule } from './administrative-regions-mchatrf-routing.module';

import { AdministrativeRegionsMCHATRFPage } from './administrative-regions-mchatrf.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativeRegionsMCHATRFPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AdministrativeRegionsMCHATRFPage]
})
export class AdministrativeRegionsMCHATRFPageModule {}
