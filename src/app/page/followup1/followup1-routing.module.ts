import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup1Page } from './followup1.page';

const routes: Routes = [
  {
    path: '',
    component: Followup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup1PageRoutingModule {}
