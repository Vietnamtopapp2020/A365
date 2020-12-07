import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpostInterventionDataPage } from './viewpost-intervention-data.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpostInterventionDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpostInterventionDataPageRoutingModule {}
