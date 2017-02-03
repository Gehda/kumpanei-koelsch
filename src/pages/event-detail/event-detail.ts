import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EventDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  event: FirebaseObjectObservable<any>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public angularFire: AngularFire
    ) {
      console.log(this.navParams);
      console.log();
      this.event = angularFire.database.object('/events/'+this.navParams.data.event.$key);
  }

  ionViewDidLoad() {
    
    
  }

}
