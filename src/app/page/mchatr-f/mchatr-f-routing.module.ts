import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MchatrFPage } from './mchatr-f.page';

const routes: Routes = [
  {
    path: '',
    component: MchatrFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MchatrFPageRoutingModule {}
