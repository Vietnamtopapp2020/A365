import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMchatRFPage } from './update-mchat-rf.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMchatRFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMchatRFPageRoutingModule {}
