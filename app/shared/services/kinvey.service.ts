import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

Kinvey.init({
    appKey: "kid_rJswLnZLm",
    appSecret: "bcdfd748b0554457bede24980e276a33"
});


@Injectable()
export class KinveyService {
    async login(username: string, password: string) {
        if (this.isAuthenticated()) {
            return Promise.resolve();
        } else {
            return await Kinvey.User.login(username, password);
        }
    }

    async loginWithMIC() {
        return await Kinvey.User.loginWithMIC("http://example.com");
    }

    async logout() {
        return await Kinvey.User.logout();
    }

    isAuthenticated(): Boolean {
        return !!this.getActiveUser();
    }

    getActiveUser() {
        return Kinvey.User.getActiveUser();
    }
}