import { ChangePasswordPage } from './../pages/user/change-password/change-password';
import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { ToastController, NavController } from 'ionic-angular';
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
    private fbProfile: FirebaseObjectObservable<any>;
    private userProfile: {
      $key: string,
      name: string,
      uid: string,
      admin: boolean
  };
    private users: Array<any>= [];
  constructor(public af: AngularFire, public toastCtrl: ToastController) {
    //init user profile
    this.af.auth.subscribe(user => {
      let usersSub, profileSub;
      console.log('Auth changed', user);
      //check auth
      if(user){
      //init fbUser
      this.fbUser = user.auth
      //init all userProfiles
      usersSub = this.af.database.list('/users').subscribe(users => {
        this.users = users;
      }, err => this.showErrorMsg(err))
      //query profile
      profileSub = this.af.database.list('/users',{
        query:{
          orderByChild: 'uid',
           equalTo: user.auth.uid,
        }}).subscribe((user=>{
          console.log('My new Profile', user[0]);
          //asign profile
          this.userProfile = user[0]
          //get ref 
          this.fbProfile = this.af.database.object('/users/'+user[0].$key)
          console.log('logged in as '+this.userProfile.name);
    }),err=>this.showErrorMsg(err))
      }else{
        if(profileSub)profileSub.unsubscribe();
        if(usersSub)usersSub.unsubscribe();
        this.fbUser =  undefined;
        this.userProfile = undefined;
      }
    })

    
  }
  getAllUserProfiles(){
    return this.users;
  }
  getMyUserProfile(){
    return this.userProfile;
  }
  getUserNameByUID(uid: string){
    let userName = '';
    this.users.forEach(user => {
      if(user.uid === uid){
        userName = user.name;
        return
      }
    })
    return userName;
  }
  getUserNameByKey(key: string){
    let userName = '';
    this.users.forEach(user => {
      if(user.$key === key){
        userName = user.name;
        return
      }
    })
    return userName;
  }
  isLoggedIn(){
    if(this.fbUser)return true;
    else return false;
  }

  signIn(email: string, password: string){
    this.af.auth.login(
      {
        email: email,
        password:password
      }
    ).then(res => {
      console.log('Logged in');
    },
    err => this.showErrorMsg(err)
    )
  }
  changePassword(oldPwd: string, newPwd: string, newPwdSub:string, cb){
    

    const credentials = firebase.auth.EmailAuthProvider.credential(this.fbUser.email, oldPwd);
    this.fbUser.reauthenticate(credentials).then((res)=>{
      console.log(res);
      if(newPwd === newPwdSub){
            this.fbUser.updatePassword(newPwd).then(()=>{
              cb();
            })
            .catch((err)=>{
              this.showErrorMsg(err);
            })
      }else{
        this.showErrorMsg('Die eingegeben Passwörter stimmen nicht überein!')
      }
    })
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
      this.af.database.list('/users').push(newUserProfile)
      this.af.auth.logout();

    },
    err => {
      this.showErrorMsg(err)
    })
  }


  showErrorMsg(err){
        if(err.message){
          let toast = this.toastCtrl.create({
            message: err.message,
            duration: 3000
          })
          toast.present();
      }

  }

}
