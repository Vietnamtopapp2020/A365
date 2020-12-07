import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileanswesguestmchatrPage } from './profileanswesguestmchatr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileanswesguestmchatrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileanswesguestmchatrPageRoutingModule {}
