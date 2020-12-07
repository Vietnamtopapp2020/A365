import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhatkycanthiepDanhgiaPage } from './nhatkycanthiep-danhgia.page';

const routes: Routes = [
  {
    path: '',
    component: NhatkycanthiepDanhgiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhatkycanthiepDanhgiaPageRoutingModule {}
