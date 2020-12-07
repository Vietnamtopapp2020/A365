import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryMchatRFPageRoutingModule } from './listhistory-mchat-rf-routing.module';

import { ListhistoryMchatRFPage } from './listhistory-mchat-rf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryMchatRFPageRoutingModule
  ],
  declarations: [ListhistoryMchatRFPage]
})
export class ListhistoryMchatRFPageModule {}
