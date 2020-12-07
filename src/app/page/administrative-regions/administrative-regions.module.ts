import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsPageRoutingModule } from './administrative-regions-routing.module';

import { AdministrativeRegionsPage } from './administrative-regions.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativeRegionsPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [AdministrativeRegionsPage]
})
export class AdministrativeRegionsPageModule {}
