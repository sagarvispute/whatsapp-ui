import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { dataService } from '../../app/data.service';

@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
  providers: [dataService]
})
export class CallsPage {
  contactlist: any;
  public service: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, data: dataService) {
    this.service = data;
    this.contactlist = this.service.contacts;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CallsPage');
  }

}
