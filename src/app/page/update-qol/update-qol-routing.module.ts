import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQOLPage } from './update-qol.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQOLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQOLPageRoutingModule {}
