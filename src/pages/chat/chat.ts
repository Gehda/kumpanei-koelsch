import { User } from './../../providers/user';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

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
  @ViewChild('content') content: Content;
  chat: FirebaseListObservable<any>;
  nextMessage: String;
  user: firebase.User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public UserService: User) {
    this.chat = this.af.database.list('/chat', {query:{
      limitToLast: 100
    }})
  }

  ionViewDidLoad() {
    this.chat.subscribe(msg => {
      setTimeout(()=>{
        if(this.content)this.content.scrollToBottom();
      },200)
    }, err=>{
      
    })
    console.log('ionViewDidLoad ChatPage');
  }
  sendMessage(){
    let tmpMsg = {
      date: Date.now(),
      msg: this.nextMessage,
      author:this.UserService.getMyUserProfile().uid
    };
    this.chat.push(tmpMsg).then(()=>this.nextMessage = "");
  }
  setUsername(uid :string){
    return this.UserService.getUserName(uid);
  }
  setMyMsg(uid){
    if(!this.UserService.getMyUserProfile() || !uid)return false;
    
    return uid === this.UserService.getMyUserProfile().uid
  }
}
