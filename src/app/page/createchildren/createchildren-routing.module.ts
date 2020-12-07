import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatechildrenPage } from './createchildren.page';

const routes: Routes = [
  {
    path: '',
    component: CreatechildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatechildrenPageRoutingModule {}
