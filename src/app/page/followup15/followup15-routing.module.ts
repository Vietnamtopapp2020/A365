import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup15Page } from './followup15.page';

const routes: Routes = [
  {
    path: '',
    component: Followup15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup15PageRoutingModule {}
