import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KienthucchudePage } from './kienthucchude.page';

const routes: Routes = [
  {
    path: '',
    component: KienthucchudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KienthucchudePageRoutingModule {}
