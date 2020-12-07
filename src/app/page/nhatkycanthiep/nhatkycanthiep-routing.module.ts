import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhatkycanthiepPage } from './nhatkycanthiep.page';

const routes: Routes = [
  {
    path: '',
    component: NhatkycanthiepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhatkycanthiepPageRoutingModule {}
