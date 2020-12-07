import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatestatuschildrentPage } from './updatestatuschildrent.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatestatuschildrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatestatuschildrentPageRoutingModule {}
