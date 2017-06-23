import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EventsProvider {
  events: FirebaseListObservable<any[]>

  constructor(public http: Http, private dbFire: AngularFireDatabase) {
    this.events = this.dbFire.list('events');
    this.createEvent('123333');
    console.log('Hello EventsProvider Provider');
  }

  getAllEvents() {
    return this.events;
  }
  getEventById(eventId) {
    return this.dbFire.object('events/' + eventId);
  }
  createEvent(name: string) {
    this.dbFire.list('users')
      .subscribe(res => {
        res = res.map(val=>val.uid)
        const newEvent = {
          date: Date.now(),
          name: name,
          participants: res,
          reports: ['Event fand am: ' + Date.now() + ' statt.']
        }
        this.events.push(newEvent);
      })
  }
  addParticipant(eventId) {
    this.dbFire.list('events/' + eventId + '/participant');
  }

}
