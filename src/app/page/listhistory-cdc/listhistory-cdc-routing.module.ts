import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryCDCPage } from './listhistory-cdc.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryCDCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryCDCPageRoutingModule {}
