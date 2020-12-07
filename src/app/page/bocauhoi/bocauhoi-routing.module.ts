import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocauhoiPage } from './bocauhoi.page';

const routes: Routes = [
  {
    path: '',
    component: BocauhoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocauhoiPageRoutingModule {}
