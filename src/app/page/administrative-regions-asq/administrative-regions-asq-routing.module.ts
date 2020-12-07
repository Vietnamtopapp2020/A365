import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativeRegionsASQPage } from './administrative-regions-asq.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativeRegionsASQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRegionsASQPageRoutingModule {}
