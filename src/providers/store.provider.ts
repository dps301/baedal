import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class StoreProvider {
    
    constructor(private http: HttpService) {
        
    }

    getStoreList() {
        return this.http.get('/store')
    }

    getCategory(storeNo) {
        return this.http.get('/category', {storeNo: storeNo})
    }

    getMenu(storeNo, categoryNo = null) {
        return this.http.get('/menu', {storeNo: storeNo, categoryNo: categoryNo})
    }
}