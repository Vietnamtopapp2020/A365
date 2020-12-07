import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup20Page } from './followup20.page';

const routes: Routes = [
  {
    path: '',
    component: Followup20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup20PageRoutingModule {}
