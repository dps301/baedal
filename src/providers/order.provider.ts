import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class OrderProvider {
    
    constructor(private http: HttpService) {
        
    }

    getOrder() {
        return this.http.get('/order')
    }
    addOrder(storeNo, orderDttm, menu) {
        return this.http.post('/order', {storeNo: storeNo, orderDttm: orderDttm, menu: menu})
    }
    deleteOrder(orderNo) {
        return this.http.delete('/order', {orderNo: orderNo})
    }
}