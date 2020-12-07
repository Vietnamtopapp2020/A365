import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAtecViewPageRoutingModule } from './update-atec-view-routing.module';

import { UpdateAtecViewPage } from './update-atec-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAtecViewPageRoutingModule
  ],
  declarations: [UpdateAtecViewPage]
})
export class UpdateAtecViewPageModule {}
