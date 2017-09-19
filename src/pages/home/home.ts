import { Component, ViewChild } from '@angular/core'; //AfterViewInit
import { NavController, PopoverController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { CameraPage } from '../camera/camera';
import { ChatsPage } from '../chats/chats';
import { StatusPage } from '../status/status';
import { CallsPage } from '../calls/calls';
import { popupPage } from '../../components/popup/popup';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';
import { AddCallPage } from '../add-call/add-call';
import { AddChatPage } from '../add-chat/add-chat';
import { AddStatusPage } from '../add-status/add-status';

import { ChatDetailPage } from '../chat-detail/chat-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  camera: any = CameraPage;
  chats: any = ChatsPage;
  status: any = StatusPage;
  calls: any = CallsPage;
  public slideIndex: number = 1;

  public popoverVar:any;

  public optList:any = [
    {
      name: 'New group',
      link: 'new-group'
    },{
      name: 'New broadcast',
      link: 'new-group'
    },{
      name: 'WhatsApp Web',
      link: 'new-group'
    },{
      name: 'Starred messages',
      link: 'new-group'
    },{
      name: 'Settings',
      link: 'new-group'
    }
  ];
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }

  presentPopover() {
    let self = this;
    let indexCnt = this.superTabs.selectedTabIndex;
    let popover = this.popoverCtrl.create(popupPage, {
      page: indexCnt,
      list: this.optList,
      ac: function() {
        self.navCtrl.push(SettingsPage);
      },
      showConfirm: function() {
        popover.dismiss();
      }
    });
    popover.present({
      ev: indexCnt
    });
    self.popoverVar = popover;
  }

  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  pageSearch(ev: any) {
    this.searchData(this.superTabs.selectedTabIndex);
  }

  searchData(e:number){
    this.navCtrl.push(SearchPage, { pagePara: e});
  }

  onTabSelect(ev: any) {
    this.slideIndex = ev.index;
    console.log('Index: ' + ev.index, 'Unique ID: ' + ev.id);
    if(ev.index == 2){
      this.optList = [
        {
          name: 'Status privacy',
          link: 'new-group'
        },{
          name: 'Settings',
          link: 'new-group'
        }
      ];
    }else if(ev.index == 3){
      this.optList = [
        {
          name: 'Clear call log',
          link: 'new-group'
        },{
          name: 'Settings',
          link: 'new-group'
        }
      ];
    }
    console.log('Tab change');
  }

  addChat() {
    this.navCtrl.push(AddChatPage);
    console.log(0);
  }

  addStatus() {
    this.navCtrl.push(AddStatusPage);
  }

  addCall() {
    this.navCtrl.push(AddCallPage);
  }

  chatDetailPage(){
    this.navCtrl.push(ChatDetailPage);
  }
}
