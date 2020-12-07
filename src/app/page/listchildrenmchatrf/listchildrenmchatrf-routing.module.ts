import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListchildrenmchatrfPage } from './listchildrenmchatrf.page';

const routes: Routes = [
  {
    path: '',
    component: ListchildrenmchatrfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListchildrenmchatrfPageRoutingModule {}
