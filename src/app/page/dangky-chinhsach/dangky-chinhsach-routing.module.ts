import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangkyChinhsachPage } from './dangky-chinhsach.page';

const routes: Routes = [
  {
    path: '',
    component: DangkyChinhsachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangkyChinhsachPageRoutingModule {}
