import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryATECPageRoutingModule } from './listhistory-atec-routing.module';

import { ListhistoryATECPage } from './listhistory-atec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryATECPageRoutingModule
  ],
  declarations: [ListhistoryATECPage]
})
export class ListhistoryATECPageModule {}
