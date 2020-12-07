import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Followup16Page } from './followup16.page';

const routes: Routes = [
  {
    path: '',
    component: Followup16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Followup16PageRoutingModule {}
