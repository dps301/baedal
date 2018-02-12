import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpService } from './http.service';

@Injectable()
export class LoginSessionService {
    constructor(private nativeStorage: NativeStorage, private http: HttpService) {
    }

    get() {
        return this.nativeStorage.getItem('loginSession')
    }

    set(userNo, name, phone) {
        this.nativeStorage.setItem('loginSession', {userNo: userNo, name: name, phone: phone})
        .then(
            () => {
                this.http.setHeader(userNo);
            },
            error => { 
                console.error('Error storing item', error);
            }
        );
    }
    
    clear() {
        this.nativeStorage.clear()
        .then(
            () => {
                this.http.setHeader('');
                console.log('storage cleared!');
            },
            error => {
                console.log('storage clear failed');
            }
        );
    }
}