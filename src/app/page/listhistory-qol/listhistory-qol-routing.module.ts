import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryQOLPage } from './listhistory-qol.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryQOLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryQOLPageRoutingModule {}
