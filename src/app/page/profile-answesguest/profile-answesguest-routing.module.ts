import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAnswesguestPage } from './profile-answesguest.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAnswesguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAnswesguestPageRoutingModule {}
