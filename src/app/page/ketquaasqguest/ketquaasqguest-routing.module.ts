import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquaasqguestPage } from './ketquaasqguest.page';

const routes: Routes = [
  {
    path: '',
    component: KetquaasqguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquaasqguestPageRoutingModule {}
