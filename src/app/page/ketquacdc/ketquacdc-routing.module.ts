import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquacdcPage } from './ketquacdc.page';

const routes: Routes = [
  {
    path: '',
    component: KetquacdcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquacdcPageRoutingModule {}
