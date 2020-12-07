import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListChildrenAsqPage } from './list-children-asq.page';

const routes: Routes = [
  {
    path: '',
    component: ListChildrenAsqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListChildrenAsqPageRoutingModule {}
