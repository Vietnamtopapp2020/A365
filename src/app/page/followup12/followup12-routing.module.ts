import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup12Page } from './followup12.page';

const routes: Routes = [
  {
    path: '',
    component: Followup12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup12PageRoutingModule {}
