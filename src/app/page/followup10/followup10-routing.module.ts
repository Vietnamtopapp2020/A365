import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup10Page } from './followup10.page';

const routes: Routes = [
  {
    path: '',
    component: Followup10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup10PageRoutingModule {}
