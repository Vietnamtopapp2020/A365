import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoReferencePage } from './video-reference.page';

const routes: Routes = [
  {
    path: '',
    component: VideoReferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoReferencePageRoutingModule {}
