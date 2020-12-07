import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListchildrenmchatrfPageRoutingModule } from './listchildrenmchatrf-routing.module';

import { ListchildrenmchatrfPage } from './listchildrenmchatrf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListchildrenmchatrfPageRoutingModule
  ],
  declarations: [ListchildrenmchatrfPage]
})
export class ListchildrenmchatrfPageModule {}
