import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatechildrenguestPage } from './createchildrenguest.page';

const routes: Routes = [
  {
    path: '',
    component: CreatechildrenguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatechildrenguestPageRoutingModule {}
