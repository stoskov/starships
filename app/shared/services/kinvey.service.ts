import { Injectable } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';

Kinvey.init({
    appKey: "kid_rJswLnZLm",
    appSecret: "bcdfd748b0554457bede24980e276a33"
});


@Injectable()
export class KinveyService {
    login(): Promise<any> {
        if (!!Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        } else {
            return Kinvey.User.login("admin", "admin");
        }
    }
}