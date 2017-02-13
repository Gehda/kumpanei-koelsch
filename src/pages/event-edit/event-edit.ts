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
      this.editEvent = {
        name:"",
        participants:[],
        date: Date.now()
      }
      this.getAllUsers();
      
        if(this.navParams.data.create){
          this.createFlag = this.navParams.data.create;
          this.events = this.navParams.data.events;
          
        }else{
          this.event = this.navParams.data.event;
          this.event.$ref.once("value", 
            res => this.editEvent = res.val(),
            err => console.log(err)
          )
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventEditPage');
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
        users.forEach(
          user => {
            this.users.push(
                {
                  id: user.$key,
                  name: user.name
                }
              )
          }
        )
      }
    );
  }
}
