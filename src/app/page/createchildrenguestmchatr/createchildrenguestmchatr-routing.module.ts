import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatechildrenguestmchatrPage } from './createchildrenguestmchatr.page';

const routes: Routes = [
  {
    path: '',
    component: CreatechildrenguestmchatrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatechildrenguestmchatrPageRoutingModule {}
