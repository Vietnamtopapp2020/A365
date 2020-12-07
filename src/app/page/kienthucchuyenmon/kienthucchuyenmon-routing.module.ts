import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KienthucchuyenmonPage } from './kienthucchuyenmon.page';

const routes: Routes = [
  {
    path: '',
    component: KienthucchuyenmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KienthucchuyenmonPageRoutingModule {}
