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
  constructor(public http: Http, private dbFire: AngularFireDatabase) {
    console.log('Hello EventsProvider Provider');
  }

  getAllEvents(){
    return this.dbFire.list('events');
  }

}
