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
                var id = starship.url.replace("https://swapi.co/api/starships/", "").replace("/", "");
                var imageUrl = "https://raw.githubusercontent.com/rdlauer/starwarsimages/master/images/" + id + ".jpg";
                starshipsList.push(new starship_model_1.Starship(starship.url, starship.name, starship.model, imageUrl));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmhpcHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJoaXBzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXVEO0FBQ3ZELGlFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQWtDO0FBR2xDO0lBR0ksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7SUFJeEQsQ0FBQztJQUdELDBDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDL0MsSUFBSTtRQUNELDBCQUEwQjtRQUMxQixlQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0gsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzFCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksUUFBUSxHQUFHLHlFQUF5RSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUYsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUNGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ1QsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXpDUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSTtPQUhyQixnQkFBZ0IsQ0EwQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhcnNoaXBzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGFyc2hpcHNVcmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL3N0YXJzaGlwc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG5cblxuICAgIGdldEFsbFN0YXJzaGlwcygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldENvbW1vbkhlYWRlcnMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnN0YXJzaGlwc1VybCwgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAvLyBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyc2hpcHNMaXN0ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRzLmZvckVhY2goKHN0YXJzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBzdGFyc2hpcC51cmwucmVwbGFjZShcImh0dHBzOi8vc3dhcGkuY28vYXBpL3N0YXJzaGlwcy9cIiwgXCJcIikucmVwbGFjZShcIi9cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yZGxhdWVyL3N0YXJ3YXJzaW1hZ2VzL21hc3Rlci9pbWFnZXMvXCIgKyBpZCArIFwiLmpwZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnNoaXBzTGlzdC5wdXNoKG5ldyBTdGFyc2hpcChzdGFyc2hpcC51cmwsIHN0YXJzaGlwLm5hbWUsIHN0YXJzaGlwLm1vZGVsLCBpbWFnZVVybCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnNoaXBzTGlzdDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=