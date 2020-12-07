import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup18Page } from './followup18.page';

const routes: Routes = [
  {
    path: '',
    component: Followup18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup18PageRoutingModule {}
