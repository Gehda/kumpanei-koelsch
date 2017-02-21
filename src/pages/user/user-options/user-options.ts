import { ChangePasswordPage } from './../change-password/change-password';
import { UserProfilePage } from './../user-profile/user-profile';
import { CreateUserPage } from './../create-user/create-user';


import { User } from './../../../providers/user';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserOptions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-options',
  templateUrl: 'user-options.html'
})
export class UserOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserOptionsPage');
  }
  goUserProfile(){
    this.navCtrl.push(UserProfilePage)
  }
  goChangePassword(){
    this.navCtrl.push(ChangePasswordPage)
  }
  goCreateUser(){
    this.navCtrl.push(CreateUserPage)
  }
}
