import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangcauhoiasqPage } from './bangcauhoiasq.page';

const routes: Routes = [
  {
    path: '',
    component: BangcauhoiasqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangcauhoiasqPageRoutingModule {}
