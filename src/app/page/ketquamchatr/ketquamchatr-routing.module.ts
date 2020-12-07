import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquamchatrPage } from './ketquamchatr.page';

const routes: Routes = [
  {
    path: '',
    component: KetquamchatrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquamchatrPageRoutingModule {}
