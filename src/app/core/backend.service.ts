import { Injectable } from '@angular/core';

import * as Kinvey from 'kinvey-nativescript-sdk';

// TODO: should be imported from kinvey-nativescript-sdk/angular but declaration file is currently missing
import { UserService } from 'kinvey-nativescript-sdk/lib/angular';

import { getString, setString } from 'application-settings';
import {User} from './login/user';


const _CURRENT_USER = '_CURRENT_USER';

@Injectable()
export class BackendService {

    constructor(private _userService: UserService) { }

    public isUserLoggedIn(): boolean {
        const loggedIn = !!this.user;

        return loggedIn;
    }

    public login(user: User) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (user.email === user.password) {
                    resolve();
                } else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same' });
                }
            }, 1000);
        });
    }

    public loginWithKinvey(user: User): Promise<any> {
        const _user: Kinvey.User = this._userService.getActiveUser();
        if (_user) {
            return this._userService.logout()
                .then(() => this.performLogin(user));
        } else {
            return this.performLogin(user);
        }
    }

    logout() {
        return this._userService.logout().then(() => {
            this.user = '';
        });
    }

    private performLogin(user: User) {
        return this._userService.login(user.email, user.password).then((_user: any) => {
            this.user = JSON.stringify(_user);
        });
    }

    private get user(): string {
        return getString(_CURRENT_USER);
    }

    private set user(theToken: string) {
        setString(_CURRENT_USER, theToken);
    }

    public forgetPassword(email: string) {
        return this._userService.resetPassword(email)
            .then((data) => {
                console.debug('Data', data);
            })
            .catch((error: Kinvey.Errors.BaseError) => {
                console.debug('Error', error);
            });
    }
}
