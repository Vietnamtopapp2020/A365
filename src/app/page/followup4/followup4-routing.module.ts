import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup4Page } from './followup4.page';

const routes: Routes = [
  {
    path: '',
    component: Followup4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup4PageRoutingModule {}
