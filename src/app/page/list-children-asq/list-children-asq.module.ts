import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChildrenAsqPageRoutingModule } from './list-children-asq-routing.module';

import { ListChildrenAsqPage } from './list-children-asq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListChildrenAsqPageRoutingModule
  ],
  declarations: [ListChildrenAsqPage]
})
export class ListChildrenAsqPageModule {}
