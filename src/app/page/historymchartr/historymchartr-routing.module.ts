import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorymchartrPage } from './historymchartr.page';

const routes: Routes = [
  {
    path: '',
    component: HistorymchartrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorymchartrPageRoutingModule {}
