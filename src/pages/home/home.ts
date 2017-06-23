import { ChatPage } from './../chat/chat/chat';
import { EventsPage } from './../event/events/events';

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ScriptPage } from './../script/script';
import { PenaltiesOverviewPage } from "../penalties/penalties-overview/penalties-overview";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ePage = EventsPage;
  sPage = ScriptPage;
  pPage = PenaltiesOverviewPage;
  cPage = ChatPage
  constructor(public navCtrl: NavController) {
    
  }


}
