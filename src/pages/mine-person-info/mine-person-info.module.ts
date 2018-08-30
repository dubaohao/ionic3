import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinePersonInfoPage } from './mine-person-info';

@NgModule({
  declarations: [
    MinePersonInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MinePersonInfoPage),
  ],
})
export class MinePersonInfoPageModule {}
