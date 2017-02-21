import { FirebaseApp, AngularFire } from 'angularfire2';
import { firebaseConfig } from './../app/app.module';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Script provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Script {

  constructor(public http: Http) {
    console.log('Hello Script Provider');
    this.init();
  }
  init(){
  }
}
