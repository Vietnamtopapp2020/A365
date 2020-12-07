import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMchatRPage } from './update-mchat-r.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMchatRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMchatRPageRoutingModule {}
