import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrangcuatoiPage } from './trangcuatoi.page';

const routes: Routes = [
  {
    path: '',
    component: TrangcuatoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangcuatoiPageRoutingModule {}
