import { EventEditPage } from './../event-edit/event-edit';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';

/*
  Generated class for the EventDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  event: FirebaseObjectObservable<any>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public angularFire: AngularFire,
    public modalCtrl: ModalController
    ) {
      this.event = angularFire.database.object('/events/'+this.navParams.data.event.$key);
  }

  ionViewDidLoad() {
    
    
  }
  editEvent(){
    let modal = this.modalCtrl.create(EventEditPage, {event: this.event});
    modal.present();
}

}
