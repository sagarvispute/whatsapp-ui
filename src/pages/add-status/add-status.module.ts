import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStatusPage } from './add-status';

@NgModule({
  declarations: [
    AddStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(AddStatusPage),
  ],
})
export class AddStatusPageModule {}
