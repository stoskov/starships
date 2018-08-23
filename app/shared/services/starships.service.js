"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var starship_model_1 = require("~/shared/models/starship.model");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var StarshipsService = /** @class */ (function () {
    function StarshipsService(http) {
        this.http = http;
        this.starshipsUrl = "https://swapi.co/api/starships";
    }
    StarshipsService.prototype.getAllStarships = function () {
        var headers = this.getCommonHeaders();
        return this.http.get(this.starshipsUrl, { headers: headers })
            .pipe(operators_1.map(function (res) {
            var data = res.json();
            var starshipsList = [];
            data.results.forEach(function (starship) {
                starshipsList.push(new starship_model_1.Starship(starship));
            });
            return starshipsList;
        }), operators_1.catchError(this.handleErrors)).toPromise();
    };
    StarshipsService.prototype.getStarshipById = function (id) {
        var headers = this.getCommonHeaders();
        return this.http.get(this.starshipsUrl + "/" + id, { headers: headers })
            .pipe(operators_1.map(function (res) {
            var data = res.json();
            return new starship_model_1.Starship(data);
        }), operators_1.catchError(this.handleErrors)).toPromise();
    };
    StarshipsService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    StarshipsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    StarshipsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], StarshipsService);
    return StarshipsService;
}());
exports.StarshipsService = StarshipsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXBzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXVEO0FBQ3ZELGlFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQWtDO0FBR2xDO0lBR0ksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7SUFJeEQsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDL0MsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsRUFBVTtRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUMxRCxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsR0FBRztZQUNILElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV0QixNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUNGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7aURBSWlCLFdBQUk7T0FIckIsZ0JBQWdCLENBb0Q1QjtJQUFELHVCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCJcbmltcG9ydCB7IFN0YXJzaGlwIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy9zdGFyc2hpcC5tb2RlbFwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXJzaGlwc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhcnNoaXBzVXJsID0gXCJodHRwczovL3N3YXBpLmNvL2FwaS9zdGFyc2hpcHNcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgZ2V0QWxsU3RhcnNoaXBzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc3RhcnNoaXBzVXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyc2hpcHNMaXN0ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRzLmZvckVhY2goKHN0YXJzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyc2hpcHNMaXN0LnB1c2gobmV3IFN0YXJzaGlwKHN0YXJzaGlwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFyc2hpcHNMaXN0O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICApLnRvUHJvbWlzZSgpXG4gICAgfVxuXG4gICAgZ2V0U3RhcnNoaXBCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldENvbW1vbkhlYWRlcnMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnN0YXJzaGlwc1VybCArIFwiL1wiICsgaWQsIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YXJzaGlwKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICApLnRvUHJvbWlzZSgpXG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufSJdfQ==