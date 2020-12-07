import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListhistoryMchatRPageRoutingModule } from './listhistory-mchat-r-routing.module';

import { ListhistoryMchatRPage } from './listhistory-mchat-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListhistoryMchatRPageRoutingModule
  ],
  declarations: [ListhistoryMchatRPage]
})
export class ListhistoryMchatRPageModule {}
