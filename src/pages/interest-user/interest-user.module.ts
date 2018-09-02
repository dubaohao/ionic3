import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestUserPage } from './interest-user';

@NgModule({
  declarations: [
    InterestUserPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestUserPage),
  ],
})
export class InterestUserPageModule {}
