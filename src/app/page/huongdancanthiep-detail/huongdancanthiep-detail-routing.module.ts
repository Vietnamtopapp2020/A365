import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuongdancanthiepDetailPage } from './huongdancanthiep-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HuongdancanthiepDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuongdancanthiepDetailPageRoutingModule {}
