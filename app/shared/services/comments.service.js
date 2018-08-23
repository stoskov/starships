"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var work_order_comment_model_1 = require("~/shared/models/work-order-comment.model");
var CommentsService = /** @class */ (function () {
    function CommentsService(kinveyService) {
        this.kinveyService = kinveyService;
        this.caseCommentsStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("caseComment", kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
    }
    CommentsService.prototype.getCommentsByOrderId = function (orderdId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, commentsList;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kinveyService.login()];
                    case 1:
                        _a.sent();
                        query = new kinvey_nativescript_sdk_1.Kinvey.Query();
                        query.equalTo("ParentId", orderdId);
                        return [4 /*yield*/, this.caseCommentsStore.find(query).toPromise()];
                    case 2:
                        commentsList = _a.sent();
                        return [2 /*return*/, commentsList.map(function (comment) {
                                return new work_order_comment_model_1.WorkOrderComment(comment);
                            })];
                }
            });
        });
    };
    CommentsService.prototype.addComment = function (orderId, comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.caseCommentsStore.save({
                            ParentId: orderId,
                            CommentBody: comment
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommentsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [kinvey_service_1.KinveyService])
    ], CommentsService);
    return CommentsService;
}());
exports.CommentsService = CommentsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFpRTtBQUNqRSxtRUFBaUQ7QUFDakQscUZBQTRFO0FBRzVFO0lBR0kseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnhDLHNCQUFpQixHQUFHLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUcvQyw4Q0FBb0IsR0FBMUIsVUFBMkIsUUFBZ0I7Ozs7OzRCQUN2QyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQTt3QkFFMUIsS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRWpCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFuRSxZQUFZLEdBQUcsU0FBb0Q7d0JBRXZFLHNCQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPO2dDQUM1QixNQUFNLENBQUMsSUFBSSwyQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDekMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLG9DQUFVLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxPQUFlOzs7OzRCQUN0QyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzRCQUNyQyxRQUFRLEVBQUUsT0FBTzs0QkFDakIsV0FBVyxFQUFFLE9BQU87eUJBQ3ZCLENBQUMsRUFBQTs0QkFIRixzQkFBTyxTQUdMLEVBQUM7Ozs7S0FDTjtJQXhCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7aURBSTBCLDhCQUFhO09BSHZDLGVBQWUsQ0F5QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXJDb21tZW50IH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLWNvbW1lbnQubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1lbnRzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjYXNlQ29tbWVudHNTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbihcImNhc2VDb21tZW50XCIsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBraW52ZXlTZXJ2aWNlOiBLaW52ZXlTZXJ2aWNlKSB7IH1cblxuXG4gICAgYXN5bmMgZ2V0Q29tbWVudHNCeU9yZGVySWQob3JkZXJkSWQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmtpbnZleVNlcnZpY2UubG9naW4oKVxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IEtpbnZleS5RdWVyeSgpO1xuICAgICAgICBxdWVyeS5lcXVhbFRvKFwiUGFyZW50SWRcIiwgb3JkZXJkSWQpO1xuXG4gICAgICAgIGxldCBjb21tZW50c0xpc3QgPSBhd2FpdCB0aGlzLmNhc2VDb21tZW50c1N0b3JlLmZpbmQocXVlcnkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgIHJldHVybiBjb21tZW50c0xpc3QubWFwKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtPcmRlckNvbW1lbnQoY29tbWVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgYWRkQ29tbWVudChvcmRlcklkOiBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jYXNlQ29tbWVudHNTdG9yZS5zYXZlKHtcbiAgICAgICAgICAgIFBhcmVudElkOiBvcmRlcklkLFxuICAgICAgICAgICAgQ29tbWVudEJvZHk6IGNvbW1lbnRcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==