import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the Script provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Script {
  script: firebase.storage.Reference;
  constructor(public http: Http) {
    console.log('Hello Script Provider'); 
}
  getScript(){
  }
}
