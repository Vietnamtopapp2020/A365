import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoashboadparentPageRoutingModule } from './doashboadparent-routing.module';

import { DoashboadparentPage } from './doashboadparent.page';
import { SwipeModule } from 'src/app/swipe/swipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoashboadparentPageRoutingModule,
    SwipeModule
  ],
  declarations: [DoashboadparentPage]
})
export class DoashboadparentPageModule {}
