import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MchatrFPageRoutingModule } from './mchatr-f-routing.module';

import { MchatrFPage } from './mchatr-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MchatrFPageRoutingModule
  ],
  declarations: [MchatrFPage]
})
export class MchatrFPageModule {}
