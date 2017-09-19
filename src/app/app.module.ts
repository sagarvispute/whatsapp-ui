import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { CameraPage } from '../pages/camera/camera';
import { ChatsPage } from '../pages/chats/chats';
import { StatusPage } from '../pages/status/status';
import { CallsPage } from '../pages/calls/calls';
import { HomePage } from '../pages/home/home';
import { popupPage } from '../components/popup/popup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { AddCallPage } from '../pages/add-call/add-call';
import { AddChatPage } from '../pages/add-chat/add-chat';
import { AddStatusPage } from '../pages/add-status/add-status';

import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { viewPicPage } from '../pages/view-pic/view-pic';

//services
import { dataService } from './data.service';

@NgModule({
  declarations: [
    MyApp, CameraPage, ChatsPage, StatusPage, CallsPage, HomePage, popupPage, SettingsPage, SearchPage, AddCallPage, AddChatPage, AddStatusPage, ChatDetailPage, viewPicPage
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(MyApp), SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, CameraPage, ChatsPage, StatusPage, CallsPage, HomePage, popupPage, SettingsPage, SearchPage, AddCallPage, AddChatPage, AddStatusPage, ChatDetailPage, viewPicPage
  ],
  providers: [
    StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}, dataService
  ]
})
export class AppModule {}
