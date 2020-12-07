import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListhistoryATECPage } from './listhistory-atec.page';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryATECPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListhistoryATECPageRoutingModule {}
