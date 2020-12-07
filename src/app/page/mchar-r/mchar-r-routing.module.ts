import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McharRPage } from './mchar-r.page';

const routes: Routes = [
  {
    path: '',
    component: McharRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McharRPageRoutingModule {}
