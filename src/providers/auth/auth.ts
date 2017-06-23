import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  userInfo: any;

  public authState: Observable<any>;
  constructor(http: Http, private authFire: AngularFireAuth, private dbFire: AngularFireDatabase) {
    this.authState = this.authFire.authState;
    
    this.authState.subscribe(res => {
      if(res){
        this.getUserInfo(res.uid);
      }else{
        this.userInfo = null;
      }
    },
    err => {
      this.userInfo = null;
    })

  }

  login(email: string, pwd: string){
    return this.authFire.auth.signInWithEmailAndPassword(email, pwd);
  }

  logout(){
    return this.authFire.auth.signOut();
  }
  createUser(email, pwd){
    if(!this.isAdmin) return;
    this.authFire.auth.createUserWithEmailAndPassword(email, pwd).then(res => {
        console.log(res);
        this.dbFire.object('users/' + res.uid).update(
          {
            admin: false,
            name:'Emil',
            uid: res.uid,
            createdBy:this.userInfo.uid,
            lastModify: Date.now()
          }
        )
      })
      .catch(err => {
        console.log(err);
      })
  }
  isAdmin(){
    if(!this.userInfo)return false;
    return this.userInfo.admin;
  }

  getUsernameById(uid){
    if(!uid)return null;
    return this.dbFire.object('users/' + uid)
      .map(res => res.name)
  }

  private getUserInfo(uid: string){
      this.dbFire.object('users/'+uid).subscribe(
        res=>{
          if(res.$exists())this.userInfo = res
        },
        err => {
          console.log(err);
        }
      )
  }
}
