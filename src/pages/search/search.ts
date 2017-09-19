import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { ChatsPage } from '../chats/chats';
//import { StatusPage } from '../status/status';
//import { CallsPage } from '../calls/calls';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public pagerParameter: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pagerParameter = navParams.get('pagePara');
  }

  ionViewDidLoad() {
  }

}
