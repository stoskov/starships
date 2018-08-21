"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var starships_service_1 = require("~/shared/services/starships.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(starshipsService, routerExtensions, router) {
        this.starshipsService = starshipsService;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.starhipsList = [];
        this.isLoading = true;
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.starshipsService.getAllStarships()
            .then(function (data) {
            _this.starhipsList = data;
            _this.isLoading = false;
        });
    };
    StarshipsComponent.prototype.onTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this.routerExtensions.navigate([{ outlets: { starships: ["starship-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    StarshipsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./starships.component.html",
            styleUrls: ["./starships.component.css"],
            providers: [starships_service_1.StarshipsService]
        }),
        tslib_1.__metadata("design:paramtypes", [starships_service_1.StarshipsService, router_1.RouterExtensions, router_2.Router])
    ], StarshipsComponent);
    return StarshipsComponent;
}());
exports.StarshipsComponent = StarshipsComponent;
