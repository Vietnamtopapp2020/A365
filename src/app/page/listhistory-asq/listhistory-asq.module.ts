import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryASQPageRoutingModule } from './listhistory-asq-routing.module';

import { ListhistoryASQPage } from './listhistory-asq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryASQPageRoutingModule
  ],
  declarations: [ListhistoryASQPage]
})
export class ListhistoryASQPageModule {}
