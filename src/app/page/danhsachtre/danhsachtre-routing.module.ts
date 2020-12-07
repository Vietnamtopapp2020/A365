import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhsachtrePage } from './danhsachtre.page';

const routes: Routes = [
  {
    path: '',
    component: DanhsachtrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanhsachtrePageRoutingModule {}
