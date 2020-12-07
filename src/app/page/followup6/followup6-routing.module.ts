import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup6Page } from './followup6.page';

const routes: Routes = [
  {
    path: '',
    component: Followup6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup6PageRoutingModule {}
