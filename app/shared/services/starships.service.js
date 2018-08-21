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
