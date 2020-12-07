import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswodPage } from './change-passwod.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswodPageRoutingModule {}
