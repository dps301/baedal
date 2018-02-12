import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { FCM } from '@ionic-native/fcm';
import { LoginSessionService } from '../services/login.session';
import { TabPage } from '../pages/tab/tab';
import { HttpService } from '../services/http.service';

@Component({
  templateUrl: 'app.html',
  providers: [ FCM ]
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM, private loginSession: LoginSessionService, private http: HttpService) {
    platform.ready().then(() => {
      statusBar.styleDefault();

      // if(!platform.is('mobileweb')) {
      //   fcm.onNotification()
      //   .subscribe(
      //     data => {
      //       if(data.wasTapped) {
      //         alert("냐1");
      //         console.log("Received in background");
      //       } 
      //       else {
      //         alert("냐2");
      //         console.log("Received in foreground");
      //       };
      //     }
      //   );
      // }

      this.loginSession.get()
      .then(
        data => {
          this.http.setHeader(data.userNo);
          this.rootPage = TabPage;
          splashScreen.hide();
        },
        error => {
          this.rootPage = LoginPage;
          splashScreen.hide();
        }
      );
    });
  }
}

