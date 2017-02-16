import { ToastController } from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
    private fbUser: firebase.User
    private userProfile: {
      name: string,
      uid: string,
      admin: boolean
  };
    private users: Array<any>;
  constructor(public af: AngularFire, public toastCtrl: ToastController) {
    //init all userProfiles
    this.af.database.list('/users').subscribe(users => {
      this.users = users;
    }, err => this.showErrorMsg(err))
    //init user profile
    this.af.auth.subscribe(user => {
      if(user != null){
        this.fbUser = user.auth
        this.af.database.object('/users/'+this.fbUser.uid).subscribe(userProfile => {
          console.log('Logged in as '+userProfile.name);
          this.userProfile = userProfile;
        },err=>{
          this.showErrorMsg(err)
        })
      }
    })

    
  }
  getAllUserProfiles(){
    return this.users;
  }
  getMyUserProfile(){
    return this.userProfile;
  }
  getUserName(uid: string){
    let userName = '';
    this.users.forEach(user => {
      if(user.uid === uid){
        userName = user.name;
        return
      }
    })
    return userName;
  }

  createUser(email: string, password: string, name: string){
    return this.af.auth.createUser({
      email:email,
      password:password,
    }).then(user=>{
      let newUser:firebase.User = user.auth;
      let newUserProfile = {};
      //create new Profile for db
      newUserProfile= {
        uid: newUser.uid,
        name: name,
        admin: false
      }
      //push profile
      this.users.push(newUserProfile);
      this.af.auth.logout();

    },
    err => {
      this.showErrorMsg(err)
    })
  }
  showErrorMsg(err){
    let message: any = err;
        if(err.message)message = err.message;

        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000
        })
        toast.present();
  }

}
