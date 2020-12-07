import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryMchatRPage } from './listhistory-mchat-r.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryMchatRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryMchatRPageRoutingModule {}
