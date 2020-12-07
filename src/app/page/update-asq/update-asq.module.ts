import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateASQPageRoutingModule } from './update-asq-routing.module';

import { UpdateASQPage } from './update-asq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateASQPageRoutingModule
  ],
  declarations: [UpdateASQPage]
})
export class UpdateASQPageModule {}
