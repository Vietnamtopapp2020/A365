import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsqtestGuestPage } from './asqtest-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AsqtestGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsqtestGuestPageRoutingModule {}
