import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreDetailPage } from '../store-detail/store-detail';
import { StoreProvider } from '../../providers/store.provider';

@IonicPage()
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {
  storeList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storeProvider: StoreProvider) {
  }

  ionViewDidLoad() {
    this.getStoreList();
  }

  getStoreList() {
    this.storeProvider.getStoreList()
    .subscribe(
      data => {
        this.storeList = data.json();
      }
    );
  }

  goDetail(storeNo, serviceStatus) {
    if(serviceStatus == 1)
      this.navCtrl.push(StoreDetailPage, {storeNo: storeNo});
  }

}
