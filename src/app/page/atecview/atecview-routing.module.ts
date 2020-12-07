import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtecviewPage } from './atecview.page';

const routes: Routes = [
  {
    path: '',
    component: AtecviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtecviewPageRoutingModule {}
