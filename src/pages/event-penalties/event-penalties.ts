import { EventPenaltiesDetailPage } from './../event-penalties-detail/event-penalties-detail';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EventPenalties page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-penalties',
  templateUrl: 'event-penalties.html'
})
export class EventPenaltiesPage {
  participantsKeys: any;
  participantsList = [];
  eventRef: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.eventRef = this.navParams.data.ref;
    this.eventRef.$ref.child('participants').once('value', snap => {
      this.participantsKeys = Object.keys(snap.val());
      this.participantsKeys.forEach(ele => {
        this.getUsername(ele).subscribe( user => {
          this.participantsList.push({
            key: ele,
            name: user.name
          })
        })
      })
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPenaltiesPage');
  }
  getUsername(key) {
   return this.af.database.object('/users/'+key);
   }

  setPenalty(key) {
    let partRef = this.eventRef.$ref.child('participants').child(key);
    this.navCtrl.push(EventPenaltiesDetailPage, { participantRef: partRef })
  }
}
