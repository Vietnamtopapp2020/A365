import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListchildrenQOLPage } from './listchildren-qol.page';

const routes: Routes = [
  {
    path: '',
    component: ListchildrenQOLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListchildrenQOLPageRoutingModule {}
