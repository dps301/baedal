import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpService } from './http.service';

@Injectable()
export class LoginSessionService {
    id: string = '';
    name: string = '';
    nation: string = '';

    constructor(private nativeStorage: NativeStorage, private http: HttpService) {
        this.autoSet();
    }

    autoSet(): any {
        this.nativeStorage.getItem('loginSession')
        .then(
            data => {
                this.id = data.id;
                this.name = data.name;
                this.nation = data.nation;
                this.http.setHeader(data.id);
            },
            error => {
            }
        );
    }

    set(id, name, nation) {
        this.nativeStorage.setItem('loginSession', {id: id, name: name, nation: nation})
        .then(
            () => {
                console.log('Stored item! userID');
                this.id = id;
                this.name = name;
                this.nation = nation;
                this.http.setHeader(id);
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
                this.id = '';
                this.name = '';
                this.nation = '';
                this.http.setHeader('');
                console.log('storage cleared!');
            },
            error => {
                console.log('storage clear failed');
            }
        );
    }
}