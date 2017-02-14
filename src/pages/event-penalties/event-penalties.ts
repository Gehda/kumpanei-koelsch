import { EventPenaltiesDetailPage } from './../event-penalties-detail/event-penalties-detail';
import { FirebaseObjectObservable } from 'angularfire2';
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
  participantsList: any;
  eventRef: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventRef = this.navParams.data.ref;
    this.participantsList = this.eventRef.$ref.child('participants');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPenaltiesPage');
  }
  setPenalty(participant){
    this.navCtrl.push(EventPenaltiesDetailPage, {participant: participant, eventRef: this.eventRef})
  }
}
