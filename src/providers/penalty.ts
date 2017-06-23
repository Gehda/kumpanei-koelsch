import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Penalty provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Penalty {

  constructor(public af: AngularFire) {
    console.log('Hello Penalty Provider');
  }


  getAllPenalties(){
  }
}
