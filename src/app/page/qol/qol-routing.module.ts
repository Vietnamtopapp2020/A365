import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QolPage } from './qol.page';

const routes: Routes = [
  {
    path: '',
    component: QolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QolPageRoutingModule {}
