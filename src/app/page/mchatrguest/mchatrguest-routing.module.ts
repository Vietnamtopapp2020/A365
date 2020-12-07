import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MchatrguestPage } from './mchatrguest.page';

const routes: Routes = [
  {
    path: '',
    component: MchatrguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MchatrguestPageRoutingModule {}
