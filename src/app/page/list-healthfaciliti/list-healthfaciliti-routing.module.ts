import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHealthfacilitiPage } from './list-healthfaciliti.page';

const routes: Routes = [
  {
    path: '',
    component: ListHealthfacilitiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHealthfacilitiPageRoutingModule {}
