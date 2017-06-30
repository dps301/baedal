import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order.provider';

@IonicPage()
@Component({
  selector: 'page-order-log',
  templateUrl: 'order-log.html',
})
export class OrderLogPage {

  logList: Array<any> = [];
  selectedIdx: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider) {
  }

  ionViewDidLoad() {
    this.orderProvider.getOrder()
    .subscribe(
      data => {
        this.logList = data.json();
      },
      error => {
        
      }
    ); 
  }

}
