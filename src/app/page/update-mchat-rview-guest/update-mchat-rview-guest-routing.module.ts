import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMchatRViewGuestPage } from './update-mchat-rview-guest.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMchatRViewGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMchatRViewGuestPageRoutingModule {}
