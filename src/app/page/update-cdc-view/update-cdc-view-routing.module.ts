import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCdcViewPage } from './update-cdc-view.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCdcViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCdcViewPageRoutingModule {}
