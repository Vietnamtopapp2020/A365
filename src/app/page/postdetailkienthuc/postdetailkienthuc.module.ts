import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostdetailkienthucPageRoutingModule } from './postdetailkienthuc-routing.module';

import { PostdetailkienthucPage } from './postdetailkienthuc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostdetailkienthucPageRoutingModule
  ],
  declarations: [PostdetailkienthucPage]
})
export class PostdetailkienthucPageModule {}
