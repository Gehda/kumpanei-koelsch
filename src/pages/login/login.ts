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
  email: any;
  passwd: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){
    this.afAuth.login(
      {
        email: this.email,
        password: this.passwd
      }
    ).then(
      res => {
        console.log(res);
      },
      rej => {
        let message: any = rej;
        if(rej.message)message = rej.message;

        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000
        })
        toast.present();
      }
    )
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
