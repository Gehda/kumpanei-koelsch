import { CreateUserPage } from './../pages/create-user/create-user';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFireAuth } from 'angularfire2';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, public fireAuth: AngularFireAuth, public menuCtrl: MenuController) {
    this.rootPage = HomePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.authProvider();
    });
  }

  authProvider(){
    this.fireAuth.subscribe(
      res =>{
        if(res == null)this.rootPage = LoginPage;
        else this.rootPage = HomePage;
    },
      err => console.log(err)
    )
  }
  signOut(){
    this.fireAuth.logout();
    this.closeMenu();
  }
  closeMenu(){
    this.menuCtrl.close();
  }
  goHome(){
    this.rootPage = HomePage
    this.closeMenu()
  }
  goUserSettings(){
    this.rootPage = CreateUserPage
    this.closeMenu()
  }
}
