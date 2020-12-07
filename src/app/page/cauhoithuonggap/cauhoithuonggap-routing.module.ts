import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CauhoithuonggapPage } from './cauhoithuonggap.page';

const routes: Routes = [
  {
    path: '',
    component: CauhoithuonggapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CauhoithuonggapPageRoutingModule {}
