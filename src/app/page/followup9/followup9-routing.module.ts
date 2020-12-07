import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup9Page } from './followup9.page';

const routes: Routes = [
  {
    path: '',
    component: Followup9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup9PageRoutingModule {}
