import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabPage } from '../tab/tab';
import { Facebook } from "@ionic-native/facebook";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private fb: Facebook) {
  }

  ionViewDidLoad() {
    // this.navCtrl.setRoot(TabPage)
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Register',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name (required)'
        },
        {
          name: 'phone',
          type: 'number',
          placeholder: 'Phone (optional)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data.phone);
          }
        }
      ]
    });
    alert.present();
  }

  fbLogin() {
    this.fb.login(['email', 'public_profile'])
    .then(
      (result) => {
        // this.checkIsUser(result.authResponse.userID);
        console.log(JSON.stringify(result));
      }, 
      (message) => {
        console.log('Error logging in');
        // this.util.showAlert('Error', JSON.stringify(message));
      }
    );
  }
}
