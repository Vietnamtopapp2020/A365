import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermconditionsPage } from './termconditions.page';

const routes: Routes = [
  {
    path: '',
    component: TermconditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermconditionsPageRoutingModule {}
