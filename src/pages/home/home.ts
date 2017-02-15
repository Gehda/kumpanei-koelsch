import { ChatPage } from './../chat/chat';
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
  cPage = ChatPage
  constructor(public navCtrl: NavController) {
    
  }


}
