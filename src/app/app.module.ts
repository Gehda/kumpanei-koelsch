import { EventDetailPage } from './../pages/event-detail/event-detail';
import { EventsPage } from './../pages/events/events';
import { ScriptPage } from './../pages/script/script';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyBNGMkO2knzpcxf16b3DqWEch-rdfsqt5o",
    authDomain: "kumpaneikoelsch-4b1ed.firebaseapp.com",
    databaseURL: "https://kumpaneikoelsch-4b1ed.firebaseio.com",
    storageBucket: "kumpaneikoelsch-4b1ed.appspot.com",
    messagingSenderId: "795992524755"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventDetailPage,
    ScriptPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScriptPage,
    EventsPage,
    EventDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
