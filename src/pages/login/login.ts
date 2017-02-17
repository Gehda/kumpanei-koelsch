import { User } from './../../providers/user';
import { AngularFireAuth, AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public toastCtrl: ToastController, public alertCtrl: AlertController, public UserService: User) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(email: string, password: string){
    this.UserService.signIn(email, password);
  }

  rememberCredentials(){
    let promp = this.alertCtrl.create({
      inputs: [
        {
          name: 'email',
          placeholder: 'email@kumpanei.de',
          type: 'email'
        }
      ],
      buttons:[
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: (ev) => console.log(ev)
        },
        {
          text: 'Senden',
          handler: (ev) => {
            console.log(ev);
            firebase.auth().sendPasswordResetEmail('test');
            console.log("send");
            
          }
        }
      ]
    });
    promp.present();
  }
}
