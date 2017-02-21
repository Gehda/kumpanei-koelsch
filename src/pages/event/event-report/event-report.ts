import { User } from './../../../providers/user';

import { FirebaseObjectObservable, FirebaseListObservable, AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
  nextEntry: String;
  event: FirebaseObjectObservable<any>;
  reports: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController, public UserService: User) {
    this.event = this.navParams.data.eventRef;
    this.reports = this.af.database.list(this.event.$ref.toString()+'/reports')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventReportPage');
  }
  submitEntry(){
    let tmpEntry = {
      date: Date.now(),
      text: this.nextEntry
    };
    this.reports.push(tmpEntry).then(()=> this.nextEntry = "");
  }
  deleteReport(report) { 
    if(!this.UserService.getMyUserProfile().admin)return;
    let prompt = this.alertCtrl.create({
      title: 'Eintrag löschen',
      message: 'Soll der Eintrag  gelöscht werden?',
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ja',
          handler: data => {
            this.reports.remove(report)
          }
        }
      ]
    });
    prompt.present();
  }
}
