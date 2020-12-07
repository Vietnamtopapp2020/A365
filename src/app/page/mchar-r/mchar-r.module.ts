import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McharRPageRoutingModule } from './mchar-r-routing.module';

import { McharRPage } from './mchar-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McharRPageRoutingModule
  ],
  declarations: [McharRPage]
})
export class McharRPageModule {}
