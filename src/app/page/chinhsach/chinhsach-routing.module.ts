import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinhsachPage } from './chinhsach.page';

const routes: Routes = [
  {
    path: '',
    component: ChinhsachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinhsachPageRoutingModule {}
