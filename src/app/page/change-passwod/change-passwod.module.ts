import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswodPageRoutingModule } from './change-passwod-routing.module';

import { ChangePasswodPage } from './change-passwod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswodPageRoutingModule
  ],
  declarations: [ChangePasswodPage]
})
export class ChangePasswodPageModule {}
