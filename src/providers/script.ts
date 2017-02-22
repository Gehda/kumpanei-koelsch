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
    firebase.storage().ref('Stammtisch Satzung.pdf').getDownloadURL().then(res => {
      this.http.get('/storage/Stammtisch%20Satzung.pdf?alt=media&token=9f6c7745-4a83-44fc-ba00-5508c061ee1c').subscribe(pdf => {
        console.log(pdf);
      }, err => { console.log(err);})
    }, err => {

    });
    
}
  getScript(){
  }
}
