import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseCardPage } from './choose-card';

@NgModule({
  declarations: [
    ChooseCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseCardPage),
  ],
})
export class ChooseCardPageModule {}
