import { EventEditPage } from './../event-edit/event-edit';
import { EventDetailPage } from './../event-detail/event-detail';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public angularFire: AngularFire,
    public alertCtrl: AlertController
  ) {
    this.events = angularFire.database.list('/events');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad eventsPage');
  }
  addEvent() {
    let createEvent = this.modalCtrl.create(EventEditPage, {create:true, events:this.events});
    createEvent.present();
  }
  eventDetail(event) {
    this.navCtrl.push(EventDetailPage, {event: event});
  }
  deleteEvent(event) {
    let prompt = this.alertCtrl.create({
      title: 'Veranstaltung löschen',
      message: 'Soll die Veranstaltung: "' + event.name + '" gelöscht werden?',
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
            this.events.remove(event)
          }
        }
      ]
    });
    prompt.present();
  }

}
