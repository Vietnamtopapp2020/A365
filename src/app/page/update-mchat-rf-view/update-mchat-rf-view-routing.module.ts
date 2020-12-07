import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMchatRfViewPage } from './update-mchat-rf-view.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMchatRfViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMchatRfViewPageRoutingModule {}
