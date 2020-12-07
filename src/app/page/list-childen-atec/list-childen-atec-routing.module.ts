import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListChildenAtecPage } from './list-childen-atec.page';

const routes: Routes = [
  {
    path: '',
    component: ListChildenAtecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListChildenAtecPageRoutingModule {}
