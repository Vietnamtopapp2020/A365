import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryMchatRFPage } from './listhistory-mchat-rf.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryMchatRFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryMchatRFPageRoutingModule {}
