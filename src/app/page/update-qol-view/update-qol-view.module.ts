import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQolViewPageRoutingModule } from './update-qol-view-routing.module';

import { UpdateQolViewPage } from './update-qol-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQolViewPageRoutingModule
  ],
  declarations: [UpdateQolViewPage]
})
export class UpdateQolViewPageModule {}
