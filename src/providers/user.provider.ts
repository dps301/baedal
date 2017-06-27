import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class UserProvider {

    constructor(private http: HttpService) {

    }

    login(sns, snsKey) {
        return this.http.post('/login', {sns: sns, snsKey: snsKey})
    }

    join(sns, snsKey, name, phone) {
        return this.http.post('/join', {sns: sns, snsKey: snsKey, name: name, phone: phone})
    }

    profileGet(userNo) {
        return this.http.get('/profile', {userNo: userNo})
    }

    profilePut(userNo, phone) {
        return this.http.put('/profile', {userNo: userNo, phone: phone})
    }
}