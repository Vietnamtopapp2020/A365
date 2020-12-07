import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquamchatrfPage } from './ketquamchatrf.page';

const routes: Routes = [
  {
    path: '',
    component: KetquamchatrfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquamchatrfPageRoutingModule {}
