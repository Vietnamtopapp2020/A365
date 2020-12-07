import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquaqolPage } from './ketquaqol.page';

const routes: Routes = [
  {
    path: '',
    component: KetquaqolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquaqolPageRoutingModule {}
