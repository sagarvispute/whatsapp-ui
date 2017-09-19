import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { viewPicPage } from './view-pic';

@NgModule({
  declarations: [
    viewPicPage,
  ],
  imports: [
    IonicPageModule.forChild(viewPicPage),
  ],
})
export class CameraPageModule {}
