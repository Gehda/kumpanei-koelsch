import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EventPenaltiesDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-penalties-detail',
  templateUrl: 'event-penalties-detail.html'
})
export class EventPenaltiesDetailPage {

penalties: FirebaseListObservable<any>;
event: FirebaseObjectObservable<any>;
participant: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.penalties = this.af.database.list('/penalties');
    this.event = this.navParams.data.eventRef;
    this.participant = this.navParams.data.participant;
    if(!this.participant.penalties)this.participant.penalties = {};
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave(){
    //make update on ref here
    this.updateRef();
  }
  getIcon(pen){
    if(this.participant.penalties[pen.$key]){
      return 'checkmark-circle';
    }else{
      return 'ios-radio-button-off';
    }
  }

  togglePenalty(pen){
    if(this.participant.penalties[pen.$key]){
      //remove entry
      delete this.participant.penalties[pen.$key];
    }else{
      //make entry
      this.participant.penalties[pen.$key] = {};
    }
  }

  updateRef(){
    this.event.$ref.child('participants')
    .once('value',snap => {
      
    })
  }
}
