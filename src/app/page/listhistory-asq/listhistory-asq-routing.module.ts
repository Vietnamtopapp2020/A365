import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryASQPage } from './listhistory-asq.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryASQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryASQPageRoutingModule {}
