import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order.provider';
import { OrderLogPage } from '../order-log/order-log';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  storeNo: number = 0;
  menu: Array<any> = [];
  totalPrice: number = 0;
  orderDttm: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider) {
  }

  ionViewDidLoad() {
    this.storeNo = this.navParams.get('storeNo')
    this.menu = this.navParams.get('menu');
    this.totalPrice = this.navParams.get('totalPrice');

    this.orderDttm = this.createDateAsUTC(new Date()).toISOString();
  }
  
  createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  }
  
  order() {
    this.orderProvider.addOrder(this.storeNo, this.orderDttm, this.menu)
    .subscribe(
      data => {
        alert('ordered!');
        this.navCtrl.setRoot(OrderLogPage);
      },
      error => {

      }
    )
  }
}
