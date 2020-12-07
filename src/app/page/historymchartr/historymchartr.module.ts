import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorymchartrPageRoutingModule } from './historymchartr-routing.module';

import { HistorymchartrPage } from './historymchartr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorymchartrPageRoutingModule
  ],
  declarations: [HistorymchartrPage]
})
export class HistorymchartrPageModule {}
