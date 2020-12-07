import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCDCPage } from './update-cdc.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCDCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCDCPageRoutingModule {}
