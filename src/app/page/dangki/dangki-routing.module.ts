import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangkiPage } from './dangki.page';

const routes: Routes = [
  {
    path: '',
    component: DangkiPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangkiPageRoutingModule {}
