import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostdetailkienthucPage } from './postdetailkienthuc.page';

const routes: Routes = [
  {
    path: '',
    component: PostdetailkienthucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostdetailkienthucPageRoutingModule {}
