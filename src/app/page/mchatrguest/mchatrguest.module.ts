import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MchatrguestPageRoutingModule } from './mchatrguest-routing.module';

import { MchatrguestPage } from './mchatrguest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MchatrguestPageRoutingModule
  ],
  declarations: [MchatrguestPage]
})
export class MchatrguestPageModule {}
