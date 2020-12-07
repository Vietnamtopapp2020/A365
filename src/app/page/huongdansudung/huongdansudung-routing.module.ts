import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuongdansudungPage } from './huongdansudung.page';

const routes: Routes = [
  {
    path: '',
    component: HuongdansudungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuongdansudungPageRoutingModule {}
