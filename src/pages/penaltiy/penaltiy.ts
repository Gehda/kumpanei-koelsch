import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Penaltiy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-penaltiy',
  templateUrl: 'penaltiy.html'
})
export class PenaltiyPage {
  events: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    angularFire: AngularFire,
    public alertCtrl: AlertController
    ) {
      this.events = angularFire.database.list('/events');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenaltiyPage');
  }
  addEvent(){
    let prompt = this.alertCtrl.create({
      title: 'Veranstaltung hinzufügen',
      message: "Ein Veranstaltung für jetzt erstellen?",
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ja',
          handler: data => {
            let date = new Date().toLocaleString();
            this.events.push({
              name:date + "Stammtisch " 
            });
          }
        }
      ]
    });
    prompt.present();
  }
  createEvent(){
    console.log("Event created");
  }

}
