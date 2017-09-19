import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { dataService } from '../../app/data.service';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
  providers: [dataService]
})
export class ChatsPage {
  contactlist: any;
  public service: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, data: dataService) {
    this.service = data;
    this.contactlist = this.service.contacts;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChatsPage');
  }
  detail(e) {
    console.log('clickde'+e)
  }
  viewPic(id) {
    this.service.contactChatDetailPage(id);
  }
  chatDetail(id){
    this.service.contactDPPage(id);
  }
}
