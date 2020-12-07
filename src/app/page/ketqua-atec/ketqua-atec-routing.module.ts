import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquaATECPage } from './ketqua-atec.page';

const routes: Routes = [
  {
    path: '',
    component: KetquaATECPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquaATECPageRoutingModule {}
