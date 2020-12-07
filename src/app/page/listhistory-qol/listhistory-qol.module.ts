import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryQOLPageRoutingModule } from './listhistory-qol-routing.module';

import { ListhistoryQOLPage } from './listhistory-qol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryQOLPageRoutingModule
  ],
  declarations: [ListhistoryQOLPage]
})
export class ListhistoryQOLPageModule {}
