import { User } from './../../providers/user';
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
participantRef: firebase.database.Reference;
participant: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public UserService: User) {
    this.participantRef = this.navParams.data.participantRef;
    this.penalties = this.af.database.list('/penalties');
    this.participantRef.on('value', snap => {
      this.participant = snap.val();
    })
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
    if(!this.UserService.getMyUserProfile().admin)return;
    if(this.participant.penalties[pen.$key]){
      //remove entry
      delete this.participant.penalties[pen.$key];
      if(Object.keys(this.participant.penalties).length === 0) this.participant.penalties = false;
    }else{
      if(!this.participant.penalties)this.participant.penalties = {};   
      //make entry
      this.participant.penalties[pen.$key] = true;
    }
  }

  updateRef(){
    this.participantRef.update(this.participant);
  }
}
