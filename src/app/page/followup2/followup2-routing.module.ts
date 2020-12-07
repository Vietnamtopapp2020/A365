import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup2Page } from './followup2.page';

const routes: Routes = [
  {
    path: '',
    component: Followup2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup2PageRoutingModule {}
