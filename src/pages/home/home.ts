import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PenaltiyPage } from './../penaltiy/penaltiy';
import { ScriptPage } from './../script/script';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pPage = PenaltiyPage;
  sPage = ScriptPage;
  constructor(public navCtrl: NavController) {
    
  }

  goTo(page: Component){
      this.navCtrl.push(page)
  }

}
