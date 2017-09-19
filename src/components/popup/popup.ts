import { Component, Output, EventEmitter } from '@angular/core';
import { ViewController, NavParams, Events, NavController } from 'ionic-angular';

@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class popupPage {
  @Output() notify: EventEmitter<any> = new EventEmitter<string>();

  static get parameters() {
    return [[ViewController],[NavParams],[Events]];
  }

  public param:any;
  public setting: any
  public close: any

  public optionList: any;

  constructor(public navCtrl: NavController, private params: NavParams, public viewCtrl: ViewController){
    this.param = params.get('page');
    //this.setting = params.get('ac');
    this.close = params.get('close');
    this.optionList = params.get('list');
    //console.log(this.optionList);
  }

  /*showSettingsPage() {
    this.params.get('showConfirm')();
    this.setting();
  }*/
}
