import { LoginPage } from './../pages/login/login';
import { EventEditPage } from './../pages/event-edit/event-edit';
import { EventDetailPage } from './../pages/event-detail/event-detail';
import { EventsPage } from './../pages/events/events';
import { ScriptPage } from './../pages/script/script';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyBNGMkO2knzpcxf16b3DqWEch-rdfsqt5o",
    authDomain: "kumpaneikoelsch-4b1ed.firebaseapp.com",
    databaseURL: "https://kumpaneikoelsch-4b1ed.firebaseio.com",
    storageBucket: "kumpaneikoelsch-4b1ed.appspot.com",
    messagingSenderId: "795992524755"
};
const myAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventDetailPage,
    ScriptPage,
    EventEditPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScriptPage,
    EventsPage,
    EventDetailPage,
    EventEditPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
