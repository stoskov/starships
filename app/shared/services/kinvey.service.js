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
    KinveyService.prototype.loginWithMIC = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC("http://example.com")];
                    case 1: return [2 /*return*/, _a.sent()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW52ZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsbUVBQWlEO0FBRWpELGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsU0FBUyxFQUFFLGtDQUFrQztDQUNoRCxDQUFDLENBQUM7QUFJSDtJQUFBO0lBd0JBLENBQUM7SUF2QlMsNkJBQUssR0FBWCxVQUFZLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7OzZCQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLHdCQUFzQjt3QkFDdEIsc0JBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFDOzRCQUVsQixxQkFBTSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzRCQUFsRCxzQkFBTyxTQUEyQyxFQUFDOzs7O0tBRTFEO0lBRUssb0NBQVksR0FBbEI7Ozs7NEJBQ1cscUJBQU0sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEVBQUE7NEJBQTNELHNCQUFPLFNBQW9ELEVBQUM7Ozs7S0FDL0Q7SUFFSyw4QkFBTSxHQUFaOzs7OzRCQUNXLHFCQUFNLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBOzRCQUFqQyxzQkFBTyxTQUEwQixFQUFDOzs7O0tBQ3JDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUF2QlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQXdCekI7SUFBRCxvQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfckpzd0xuWkxtXCIsXG4gICAgYXBwU2VjcmV0OiBcImJjZGZkNzQ4YjA1NTQ0NTdiZWRlMjQ5ODBlMjc2YTMzXCJcbn0pO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLaW52ZXlTZXJ2aWNlIHtcbiAgICBhc3luYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgS2ludmV5LlVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvZ2luV2l0aE1JQygpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEtpbnZleS5Vc2VyLmxvZ2luV2l0aE1JQyhcImh0dHA6Ly9leGFtcGxlLmNvbVwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBLaW52ZXkuVXNlci5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKTogQm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0QWN0aXZlVXNlcigpO1xuICAgIH1cblxuICAgIGdldEFjdGl2ZVVzZXIoKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgfVxufSJdfQ==