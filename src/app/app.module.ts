import { ChatPage } from './../pages/chat/chat/chat';
import { EventPenaltiesDetailPage } from './../pages/event/event-penalties-detail/event-penalties-detail';

import { CreateUserPage } from './../pages/user/create-user/create-user';
import { User } from './../providers/user';
import { EventReportPage } from './../pages/event/event-report/event-report';
import { EventPenaltiesPage } from './../pages/event/event-penalties/event-penalties';
import { EventEditPage } from './../pages/event/event-edit/event-edit';
import { EventDetailPage } from './../pages/event/event-detail/event-detail';
import { EventsPage } from './../pages/event/events/events';
import { UserOptionsPage } from './../pages/user/user-options/user-options';
import { LoginPage } from './../pages/login/login';
import { UserProfilePage } from './../pages/user/user-profile/user-profile';
import { ScriptPage } from './../pages/script/script';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
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
    LoginPage,
    EventPenaltiesPage,
    EventReportPage,
    ChatPage,
    CreateUserPage,
    UserOptionsPage,
    UserProfilePage,
    EventPenaltiesDetailPage
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
    LoginPage,
    EventPenaltiesPage,
    EventReportPage,
    ChatPage,
    CreateUserPage,
    UserOptionsPage,
    UserProfilePage,
    EventPenaltiesDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, User]
})
export class AppModule {}
