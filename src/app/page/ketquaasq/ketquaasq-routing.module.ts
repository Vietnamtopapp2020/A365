import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquaasqPage } from './ketquaasq.page';

const routes: Routes = [
  {
    path: '',
    component: KetquaasqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquaasqPageRoutingModule {}
