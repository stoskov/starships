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
            .pipe(
        // map(res => res.json()),
        operators_1.map(function (res) {
            var data = res.json();
            var starshipsList = [];
            data.results.forEach(function (starship) {
                starshipsList.push(new starship_model_1.Starship(starship.url, starship.name, starship.model));
            });
            return starshipsList;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmhpcHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJoaXBzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXVEO0FBQ3ZELGlFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQWtDO0FBR2xDO0lBR0ksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7SUFJeEQsQ0FBQztJQUdELDBDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDL0MsSUFBSTtRQUNELDBCQUEwQjtRQUMxQixlQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0gsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzFCLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsRixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUE7SUFDVCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdkNRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUlpQixXQUFJO09BSHJCLGdCQUFnQixDQXdDNUI7SUFBRCx1QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXG5pbXBvcnQgeyBTdGFyc2hpcCB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvc3RhcnNoaXAubW9kZWxcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGFyc2hpcHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXJzaGlwc1VybCA9IFwiaHR0cHM6Ly9zd2FwaS5jby9hcGkvc3RhcnNoaXBzXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcblxuICAgIH1cblxuXG4gICAgZ2V0QWxsU3RhcnNoaXBzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc3RhcnNoaXBzVXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIC8vIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJzaGlwc0xpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaCgoc3RhcnNoaXApID0+IHsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzaGlwc0xpc3QucHVzaChuZXcgU3RhcnNoaXAoc3RhcnNoaXAudXJsLCBzdGFyc2hpcC5uYW1lLCBzdGFyc2hpcC5tb2RlbCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnNoaXBzTGlzdDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=