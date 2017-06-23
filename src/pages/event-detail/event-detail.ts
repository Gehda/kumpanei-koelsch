import { EventsProvider } from './../../providers/events/events';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  event: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eventProvider: EventsProvider) {
    this.event = this.eventProvider.getEventById(this.navParams.data.eventId);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

}
