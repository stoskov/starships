"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var WorkOrdersService = /** @class */ (function () {
    function WorkOrdersService() {
        this.starshipsUrl = "https://swapi.co/api/starships";
        this.workOrdersDataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("case", kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
    }
    WorkOrdersService.prototype.getAllWorkOrders = function () {
        var _this = this;
        this.login()
            .then(function () {
            _this.workOrdersDataStore.find()
                .subscribe(function (entities) {
                alert(entities.length);
            }, function (error) {
                alert(error);
            }, function () {
            });
        });
    };
    ;
    WorkOrdersService.prototype.login = function () {
        if (!!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk_1.Kinvey.User.login("admin", "admin");
        }
    };
    WorkOrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], WorkOrdersService);
    return WorkOrdersService;
}());
exports.WorkOrdersService = WorkOrdersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5zZXJ2aWNlLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrb3JkZXJzLnNlcnZpY2UuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxtRUFBaUQ7QUFHakQ7SUFJSTtRQUhRLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7UUFDaEQsd0JBQW1CLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoRixDQUFDO0lBRWpCLDRDQUFnQixHQUFoQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssRUFBRTthQUNQLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7aUJBQzFCLFNBQVMsQ0FBQyxVQUFVLFFBQVE7Z0JBQ3pCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUIsQ0FBQyxFQUFFLFVBQVUsS0FBSztnQkFDZCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUFFO1lBRUgsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFBQSxDQUFDO0lBRU0saUNBQUssR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQTFCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTs7T0FDQSxpQkFBaUIsQ0EyQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtPcmRlcnNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXJzaGlwc1VybCA9IFwiaHR0cHM6Ly9zd2FwaS5jby9hcGkvc3RhcnNoaXBzXCI7XG4gICAgcHJpdmF0ZSB3b3JrT3JkZXJzRGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKFwiY2FzZVwiLCBLaW52ZXkuRGF0YVN0b3JlVHlwZS5OZXR3b3JrKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRBbGxXb3JrT3JkZXJzKCkge1xuICAgICAgICB0aGlzLmxvZ2luKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuZmluZCgpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlbnRpdGllcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH07XG5cbiAgICBwcml2YXRlIGxvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICghIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKFwiYWRtaW5cIiwgXCJhZG1pblwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=