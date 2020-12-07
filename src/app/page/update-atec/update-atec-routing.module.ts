import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateATECPage } from './update-atec.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateATECPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateATECPageRoutingModule {}
