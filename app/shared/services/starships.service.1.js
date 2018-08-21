"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        }), operators_1.catchError(this.handleErrors));
    };
    StarshipsService.prototype.getStarshipById = function (id) {
        var headers = this.getCommonHeaders();
        return this.http.get(this.starshipsUrl + "/" + id, { headers: headers })
            .pipe(
        // map(res => res.json()),
        operators_1.map(function (res) {
            var data = res.json();
            return new starship_model_1.Starship(data);
        }), operators_1.catchError(this.handleErrors));
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
    StarshipsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StarshipsService);
    return StarshipsService;
}());
exports.StarshipsService = StarshipsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXBzLnNlcnZpY2UuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJzaGlwcy5zZXJ2aWNlLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXVEO0FBQ3ZELGlFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQWtDO0FBR2xDO0lBR0ksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7SUFJeEQsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDL0MsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUE7SUFDVCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQzFELElBQUk7UUFDRCwwQkFBMEI7UUFDMUIsZUFBRyxDQUFDLFVBQUEsR0FBRztZQUNILElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV0QixNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUNGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ1QsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXBEUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSTtPQUhyQixnQkFBZ0IsQ0FxRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhcnNoaXBzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGFyc2hpcHNVcmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL3N0YXJzaGlwc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBbGxTdGFyc2hpcHMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5nZXRDb21tb25IZWFkZXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zdGFyc2hpcHNVcmwsIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJzaGlwc0xpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaCgoc3RhcnNoaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzaGlwc0xpc3QucHVzaChuZXcgU3RhcnNoaXAoc3RhcnNoaXApKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJzaGlwc0xpc3Q7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRTdGFyc2hpcEJ5SWQoaWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc3RhcnNoaXBzVXJsICsgXCIvXCIgKyBpZCwgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAvLyBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFyc2hpcChkYXRhKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=