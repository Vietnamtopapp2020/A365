import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquamchatrguestPage } from './ketquamchatrguest.page';

const routes: Routes = [
  {
    path: '',
    component: KetquamchatrguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquamchatrguestPageRoutingModule {}
