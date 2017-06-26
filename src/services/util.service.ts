import { Injectable } from '@angular/core';
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class UtilService {
    constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {

    }

    showAlert(title: string = "Message", msg: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }

    showToast(position: string, message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: position
        });

        toast.present();
    }
}