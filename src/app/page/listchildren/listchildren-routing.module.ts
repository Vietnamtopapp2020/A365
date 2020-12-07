import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListchildrenPage } from './listchildren.page';

const routes: Routes = [
  {
    path: '',
    component: ListchildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListchildrenPageRoutingModule {}
