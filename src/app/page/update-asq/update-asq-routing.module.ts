import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateASQPage } from './update-asq.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateASQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateASQPageRoutingModule {}
