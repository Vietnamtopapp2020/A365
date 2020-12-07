import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListchildrenCDCPage } from './listchildren-cdc.page';

const routes: Routes = [
  {
    path: '',
    component: ListchildrenCDCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListchildrenCDCPageRoutingModule {}
