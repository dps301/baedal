import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store.provider';
import { OrderPage } from '../order/order';

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {

  storeNo: number = 0;
  selectedCategory: number = 0;
  categoryList: Array<any> = [];
  menuList: Array<any> = [];
  totalPrice: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storeProvider: StoreProvider) {
  }

  ionViewDidLoad() {
    this.storeNo = this.navParams.get('storeNo');
    this.getCategory();
    this.getMenu();
  }

  getCategory() {
    this.storeProvider.getCategory(this.storeNo)
    .subscribe(
      data => {
        this.categoryList = data.json();
      }
    );
  }

  getMenu() {
    this.storeProvider.getMenu(this.storeNo, this.selectedCategory)
    .subscribe(
      data => {
        this.menuList = data.json();
      }
    );
  }

  categoryChanged(categoryNo) {
    this.selectedCategory = categoryNo;
    this.getCategory();
  }

  editMenuCnt(idx, pm) {
    if(pm == "+") {
      this.menuList[idx].cnt++;
      this.totalPrice += this.menuList[idx].price;
    }
    else if(this.menuList[idx].cnt != 0) {
      this.menuList[idx].cnt--;
      this.totalPrice -= this.menuList[idx].price;
    }
  }

  goOrder() {
    this.navCtrl.push(OrderPage, {storeNo: this.storeNo, menu: this.menuList.filter((item) => item.cnt > 0), totalPrice: this.totalPrice});
  }
}
