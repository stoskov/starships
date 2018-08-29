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
    KinveyService.prototype.login = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAuthenticated()) return [3 /*break*/, 1];
                        return [2 /*return*/, Promise.resolve()];
                    case 1: return [4 /*yield*/, kinvey_nativescript_sdk_1.Kinvey.User.login(username, password)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KinveyService.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, kinvey_nativescript_sdk_1.Kinvey.User.logout()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KinveyService.prototype.isAuthenticated = function () {
        return !!this.getActiveUser();
    };
    KinveyService.prototype.getActiveUser = function () {
        return kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
    };
    KinveyService = tslib_1.__decorate([
        core_1.Injectable()
    ], KinveyService);
    return KinveyService;
}());
exports.KinveyService = KinveyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW52ZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsbUVBQWlEO0FBRWpELGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsU0FBUyxFQUFFLGtDQUFrQztDQUNoRCxDQUFDLENBQUM7QUFJSDtJQUFBO0lBb0JBLENBQUM7SUFuQlMsNkJBQUssR0FBWCxVQUFZLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7OzZCQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLHdCQUFzQjt3QkFDdEIsc0JBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFDOzRCQUVsQixxQkFBTSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzRCQUFsRCxzQkFBTyxTQUEyQyxFQUFDOzs7O0tBRTFEO0lBRUssOEJBQU0sR0FBWjs7Ozs0QkFDVyxxQkFBTSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs0QkFBakMsc0JBQU8sU0FBMEIsRUFBQzs7OztLQUNyQztJQUVELHVDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBbkJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTtPQUNBLGFBQWEsQ0FvQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuXG5LaW52ZXkuaW5pdCh7XG4gICAgYXBwS2V5OiBcImtpZF9ySnN3TG5aTG1cIixcbiAgICBhcHBTZWNyZXQ6IFwiYmNkZmQ3NDhiMDU1NDQ1N2JlZGUyNDk4MGUyNzZhMzNcIlxufSk7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtpbnZleVNlcnZpY2Uge1xuICAgIGFzeW5jIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBLaW52ZXkuVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCk6IEJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBnZXRBY3RpdmVVc2VyKCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuICAgIH1cbn0iXX0=