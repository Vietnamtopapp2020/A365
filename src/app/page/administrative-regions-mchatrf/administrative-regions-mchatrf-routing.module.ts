import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativeRegionsMCHATRFPage } from './administrative-regions-mchatrf.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativeRegionsMCHATRFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRegionsMCHATRFPageRoutingModule {}
