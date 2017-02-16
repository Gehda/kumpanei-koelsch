import { User } from './../../providers/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CreateUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html'
})
export class CreateUserPage {
  newUser: {
    name: string,
    email: string,
    password: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }
  submitNewUser(email: string, name: string, password: string){
    this.UserService.createUser(email,password,name).then(() => {
      
    })
  }
}
