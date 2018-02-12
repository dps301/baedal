import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabPage } from '../tab/tab';
import { Facebook } from "@ionic-native/facebook";
import { UserProvider } from '../../providers/user.provider';
import { LoginSessionService } from '../../services/login.session';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Facebook ]
})
export class LoginPage {
  sns: string = '';
  snsKey: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private fb: Facebook, private userProvider: UserProvider, private loginSession: LoginSessionService) {
  }

  ionViewDidLoad() {
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
            this.register(data.name, data.phone);
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
        this.sns = 'fb';
        this.snsKey = result.authResponse.userID;
        this.checkIsUser();
      }, 
      (message) => {
        this.presentPrompt();
      }
    );
  }

  checkIsUser() {
    this.userProvider.login(this.sns, this.snsKey)
    .subscribe(
      data => {
        this.loginSession.set(data.json()[0].userNo, data.json()[0].name, data.json()[0].phone);
        this.navCtrl.setRoot(TabPage);
      },
      error => {
        this.presentPrompt();
      }
    );
  }

  register(name, phone) {
    this.userProvider.join(this.sns, this.snsKey, name, phone)
    .subscribe(
      data => {
        this.loginSession.set(data.json()[0].userNo, name, phone);
        this.navCtrl.setRoot(TabPage);
      },
      error => {

      }
    );
  }
}
