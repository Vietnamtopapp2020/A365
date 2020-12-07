import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboadteacherPage } from './dashboadteacher.page';

const routes: Routes = [
  {
    path: '',
    component: DashboadteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboadteacherPageRoutingModule {}
