import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhgiahieuquaPage } from './danhgiahieuqua.page';

const routes: Routes = [
  {
    path: '',
    component: DanhgiahieuquaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanhgiahieuquaPageRoutingModule {}
