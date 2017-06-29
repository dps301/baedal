import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store.provider';

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {

  storeNo: number = 0;
  selectedCategory: any = null;
  categoryList: Array<any> = [];
  menuList: Array<any> = [];

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
}
