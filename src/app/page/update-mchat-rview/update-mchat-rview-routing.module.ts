import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMchatRViewPage } from './update-mchat-rview.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMchatRViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMchatRViewPageRoutingModule {}
