"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Starship = /** @class */ (function () {
    function Starship(url, name, model, imageUrl) {
        this.url = url;
        this.name = name;
        this.model = model;
        this.imageUrl = imageUrl;
    }
    Object.defineProperty(Starship.prototype, "id", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    return Starship;
}());
exports.Starship = Starship;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBVUksa0JBQVksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUTtRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFURCxzQkFBSSx3QkFBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFRTCxlQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZHVsZURlZiB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9zcmMvdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhcnNoaXAge1xuICAgIHVybDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG5hbWUsIG1vZGVsLCBpbWFnZVVybCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gaW1hZ2VVcmw7XG4gICAgfVxufSJdfQ==