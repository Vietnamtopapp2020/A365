import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatechildrenPage } from './updatechildren.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatechildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatechildrenPageRoutingModule {}
