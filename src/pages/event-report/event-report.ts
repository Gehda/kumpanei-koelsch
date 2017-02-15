import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EventReport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-report',
  templateUrl: 'event-report.html'
})
export class EventReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventReportPage');
  }

}
