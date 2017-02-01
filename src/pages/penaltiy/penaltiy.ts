import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Penaltiy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-penaltiy',
  templateUrl: 'penaltiy.html'
})
export class PenaltiyPage {
  events: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    angularFire: AngularFire
    ) {
      this.events = angularFire.database.list('/events');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenaltiyPage');
  }

}
