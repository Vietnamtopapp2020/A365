import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChildenAtecPageRoutingModule } from './list-childen-atec-routing.module';

import { ListChildenAtecPage } from './list-childen-atec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListChildenAtecPageRoutingModule
  ],
  declarations: [ListChildenAtecPage]
})
export class ListChildenAtecPageModule {}
