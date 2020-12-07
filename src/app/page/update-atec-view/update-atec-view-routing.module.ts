import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAtecViewPage } from './update-atec-view.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAtecViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAtecViewPageRoutingModule {}
