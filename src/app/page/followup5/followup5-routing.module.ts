import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup5Page } from './followup5.page';

const routes: Routes = [
  {
    path: '',
    component: Followup5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup5PageRoutingModule {}
