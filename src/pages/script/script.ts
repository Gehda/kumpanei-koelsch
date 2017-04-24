import { Script } from './../../providers/script';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Script page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-script',
  templateUrl: 'script.html'
})
export class ScriptPage {
  scriptRef: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ScriptService: Script) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScriptPage');
    // this. scriptRef = this.ScriptService.getScript()
  }
}
