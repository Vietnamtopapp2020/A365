import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQolViewPage } from './update-qol-view.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQolViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQolViewPageRoutingModule {}
