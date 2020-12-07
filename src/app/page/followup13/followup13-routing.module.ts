import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup13Page } from './followup13.page';

const routes: Routes = [
  {
    path: '',
    component: Followup13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup13PageRoutingModule {}
