import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboadteacherPageRoutingModule } from './dashboadteacher-routing.module';

import { DashboadteacherPage } from './dashboadteacher.page';
import { SwipeModule } from 'src/app/swipe/swipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboadteacherPageRoutingModule,
    SwipeModule
  ],
  declarations: [DashboadteacherPage]
})
export class DashboadteacherPageModule {}
