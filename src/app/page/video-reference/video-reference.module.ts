import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoReferencePageRoutingModule } from './video-reference-routing.module';

import { VideoReferencePage } from './video-reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoReferencePageRoutingModule
  ],
  declarations: [VideoReferencePage]
})
export class VideoReferencePageModule {}
