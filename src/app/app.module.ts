import { EventDetailPageModule } from './../pages/event-detail/event-detail.module';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { LoginPageModule } from './../pages/login/login.module';
import {  HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EventsProvider } from '../providers/events/events';

export const firebaseConfig = {
    apiKey: "AIzaSyBNGMkO2knzpcxf16b3DqWEch-rdfsqt5o",
    authDomain: "kumpaneikoelsch-4b1ed.firebaseapp.com",
    databaseURL: "https://kumpaneikoelsch-4b1ed.firebaseio.com",
    storageBucket: "kumpaneikoelsch-4b1ed.appspot.com",
    messagingSenderId: "795992524755"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    SettingsPageModule,
    EventDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventsProvider
  ]
})
export class AppModule {}
