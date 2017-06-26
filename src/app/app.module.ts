import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginSessionService } from '../services/login.session';
import { UtilService } from '../services/util.service';
import { HttpService } from '../services/http.service';
import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';
import { StoreListPage } from '../pages/store-list/store-list';
import { OrderLogPage } from '../pages/order-log/order-log';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabPage,
    StoreListPage,
    OrderLogPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabPage,
    StoreListPage,
    OrderLogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginSessionService,
    UtilService,
    HttpService
  ]
})
export class AppModule {}
