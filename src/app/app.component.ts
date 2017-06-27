import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if(!platform.is('mobileweb')) {
      fcm.onNotification()
      .subscribe(
        (data) => {
          if(data.wasTapped) {
            alert(JSON.stringify(data));
          } else{
            alert(JSON.stringify(data));
          }
        }
      );
    }
  }
}

