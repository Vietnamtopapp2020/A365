import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup7Page } from './followup7.page';

const routes: Routes = [
  {
    path: '',
    component: Followup7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup7PageRoutingModule {}
