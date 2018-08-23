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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW52ZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsbUVBQWlEO0FBRWpELGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsU0FBUyxFQUFFLGtDQUFrQztDQUNoRCxDQUFDLENBQUM7QUFJSDtJQUFBO0lBUUEsQ0FBQztJQVBHLDZCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFQUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBUXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuXG5LaW52ZXkuaW5pdCh7XG4gICAgYXBwS2V5OiBcImtpZF9ySnN3TG5aTG1cIixcbiAgICBhcHBTZWNyZXQ6IFwiYmNkZmQ3NDhiMDU1NDQ1N2JlZGUyNDk4MGUyNzZhMzNcIlxufSk7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtpbnZleVNlcnZpY2Uge1xuICAgIGxvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICghIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKFwiYWRtaW5cIiwgXCJhZG1pblwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=