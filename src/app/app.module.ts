import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginSessionService } from '../services/login.session';
import { UtilService } from '../services/util.service';
import { HttpService } from '../services/http.service';
import { OrderProvider } from '../providers/order.provider';
import { StoreProvider } from '../providers/store.provider';
import { UserProvider } from '../providers/user.provider';
import { ServerAddr } from '../services/server.addr';
import { FCM } from '@ionic-native/fcm';
import { StoreListPageModule } from '../pages/store-list/store-list.module';
import { StoreDetailPageModule } from '../pages/store-detail/store-detail.module';
import { OrderLogPageModule } from '../pages/order-log/order-log.module';
import { LoginPageModule } from '../pages/login/login.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { OrderPageModule } from '../pages/order/order.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    StoreListPageModule,
    StoreDetailPageModule,
    OrderLogPageModule,
    LoginPageModule,
    TabPageModule,
    OrderPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginSessionService,
    UtilService,
    HttpService,
    OrderProvider,
    StoreProvider,
    UserProvider,
    ServerAddr,
    FCM
  ]
})
export class AppModule {}
