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
  participantsList: Array<any>;
  eventRef: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.eventRef = this.navParams.data.ref;
    this.eventRef.$ref.child('participants').once('value', snap => {
      this.participantsKeys = Object.keys(snap.val());
      this.participantsList = [];
      this.participantsKeys.forEach(ele => {
        this.af.database.list('/users', {query:{
          orderByKey:true,
          equalTo: ele
        }}).subscribe(users => {
          if(users[0]){
            this.participantsList.push({
              key:users[0].$key,
              name:users[0].name
            })
          }
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
