import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup8Page } from './followup8.page';

const routes: Routes = [
  {
    path: '',
    component: Followup8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup8PageRoutingModule {}
