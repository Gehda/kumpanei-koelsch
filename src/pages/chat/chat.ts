import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  chat: FirebaseListObservable<any>;
  nextMessage: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.chat = this.af.database.list('/chat')
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  sendMessage(){
    let tmpMsg = {
      date: Date.now(),
      msg: this.nextMessage,
      author:this.af.auth.getAuth().uid
    };
    this.chat.push(tmpMsg).then(()=>this.nextMessage = "");
  }
}
