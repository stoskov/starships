"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_rJswLnZLm",
    appSecret: "bcdfd748b0554457bede24980e276a33"
});
var KinveyService = /** @class */ (function () {
    function KinveyService() {
    }
    KinveyService.prototype.login = function () {
        if (!!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk_1.Kinvey.User.login("admin", "admin");
        }
    };
    KinveyService = tslib_1.__decorate([
        core_1.Injectable()
    ], KinveyService);
    return KinveyService;
}());
exports.KinveyService = KinveyService;
