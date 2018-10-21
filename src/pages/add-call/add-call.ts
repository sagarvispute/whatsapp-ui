import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { popupPage } from '../../components/popup/popup';

import { dataService } from '../../app/data.service';

@Component({
  selector: 'page-add-call',
  templateUrl: 'add-call.html',
  providers: [dataService]
})
export class AddCallPage {
  contactlist: any;
  public service: any;

  public toggled: boolean = false;

  public popoverVar:any;
  public CompSearch:any = '';
  public optList:any = [
    {
      name: 'Invite a friend',
      link: 'new-group'
    },{
      name: 'Contacts',
      link: 'new-group'
    },{
      name: 'Refresh',
      link: 'new-group'
    },{
      name: 'Help',
      link: 'new-group'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, data: dataService, public popoverCtrl: PopoverController) {
    this.service = data;
    this.contactlist = this.service.contacts;
    this.toggled = false;
  }

  public toggle(): void {
    this.toggled = this.toggled ? false : true;
    this.CompSearch = '';
  }
  closeSearch(){ this.toggle() }

  presentPopover(myEvent) {
    let self = this;
    let popover = this.popoverCtrl.create(popupPage, {
      list: this.optList,
      ac: function() {
      },
      showConfirm: function() {
        popover.dismiss();
      }
    });
    popover.present({
      ev: myEvent
    });
    self.popoverVar = popover;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCallPage');
  }

}
