import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpostInterventionDataPageRoutingModule } from './viewpost-intervention-data-routing.module';

import { ViewpostInterventionDataPage } from './viewpost-intervention-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpostInterventionDataPageRoutingModule
  ],
  declarations: [ViewpostInterventionDataPage]
})
export class ViewpostInterventionDataPageModule {}
