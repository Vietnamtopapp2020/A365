import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuongdancanthiepPage } from './huongdancanthiep.page';

const routes: Routes = [
  {
    path: '',
    component: HuongdancanthiepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuongdancanthiepPageRoutingModule {}
