import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhatkycanthiepHoatdongPage } from './nhatkycanthiep-hoatdong.page';

const routes: Routes = [
  {
    path: '',
    component: NhatkycanthiepHoatdongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhatkycanthiepHoatdongPageRoutingModule {}
