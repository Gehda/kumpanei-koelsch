import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EventsPage } from './../events/events';
import { ScriptPage } from './../script/script';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ePage = EventsPage;
  sPage = ScriptPage;
  constructor(public navCtrl: NavController) {
    
  }

  goTo(page: Component){
      this.navCtrl.push(page)
  }

}
