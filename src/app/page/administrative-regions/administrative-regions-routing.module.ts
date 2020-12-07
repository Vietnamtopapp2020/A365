import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativeRegionsPage } from './administrative-regions.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativeRegionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRegionsPageRoutingModule {}
