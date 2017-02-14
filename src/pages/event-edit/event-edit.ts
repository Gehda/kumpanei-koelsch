import { FirebaseObjectObservable, FirebaseListObservable, AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the EventEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-edit',
  templateUrl: 'event-edit.html'
})
export class EventEditPage {
  users = [];
  createFlag = false;
  event: FirebaseObjectObservable<any>;
  editEvent: any;
  events: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public angularFire: AngularFire
    ) {
      
      this.getAllUsers();
      
        if(this.navParams.data.create){
          this.editEvent = {
            name:"",
            participants:false,
            date: Date.now()
          }
          this.createFlag = this.navParams.data.create;
          this.events = this.navParams.data.events;
          
        }else{
          this.event = this.navParams.data.event;
          this.event.$ref.on("value", 
            res => this.editEvent = res.val(),
            err => console.log(err)
          )
        }
  }

  ionViewDidLoad() {
    console.log(this.editEvent);
  }
  submitEvent(){
    console.log(this.editEvent);
    if(this.createFlag){
      this.events.push(this.editEvent);
    }else{
      this.event.update(this.editEvent);
    }
    this.viewCtrl.dismiss();
  }


  private getAllUsers(){
    this.angularFire.database.list('/users').subscribe(
      (users) => {
        this.users = users
      }
    );
  }

  selectChange(event){
    this.editEvent.participants = false;
    console.log(event);
    if(event.length > 0){
      this.editEvent.participants = {};
      event.forEach((element, index, array) => {
        this.editEvent.participants[element] = {penalties:false};
      })
    }
  }
}