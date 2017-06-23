import { EventsProvider } from './../../providers/events/events';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: any;
  constructor(public navCtrl: NavController, public auth: AuthProvider, private event: EventsProvider) {
    this.events = event.getAllEvents();
  }

}
