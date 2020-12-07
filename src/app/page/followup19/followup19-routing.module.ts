import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup19Page } from './followup19.page';

const routes: Routes = [
  {
    path: '',
    component: Followup19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup19PageRoutingModule {}
