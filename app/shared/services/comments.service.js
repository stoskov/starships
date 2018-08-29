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
        this.caseCommentsStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("caseComment", kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache);
    }
    CommentsService.prototype.getCommentsByOrderId = function (orderdId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, commentsList;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new kinvey_nativescript_sdk_1.Kinvey.Query();
                        query.equalTo("ParentId", orderdId);
                        return [4 /*yield*/, this.caseCommentsStore.find(query).toPromise()];
                    case 1:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFpRTtBQUNqRSxtRUFBaUQ7QUFDakQscUZBQTRFO0FBRzVFO0lBR0kseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnhDLHNCQUFpQixHQUFHLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUcvQyw4Q0FBb0IsR0FBMUIsVUFBMkIsUUFBZ0I7Ozs7Ozt3QkFDakMsS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRWpCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFuRSxZQUFZLEdBQUcsU0FBb0Q7d0JBRXZFLHNCQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPO2dDQUM1QixNQUFNLENBQUMsSUFBSSwyQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDekMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLG9DQUFVLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxPQUFlOzs7OzRCQUN0QyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzRCQUNyQyxRQUFRLEVBQUUsT0FBTzs0QkFDakIsV0FBVyxFQUFFLE9BQU87eUJBQ3ZCLENBQUMsRUFBQTs0QkFIRixzQkFBTyxTQUdMLEVBQUM7Ozs7S0FDTjtJQXRCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7aURBSTBCLDhCQUFhO09BSHZDLGVBQWUsQ0F1QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXJDb21tZW50IH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLWNvbW1lbnQubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1lbnRzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjYXNlQ29tbWVudHNTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbihcImNhc2VDb21tZW50XCIsIEtpbnZleS5EYXRhU3RvcmVUeXBlLkNhY2hlKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUga2ludmV5U2VydmljZTogS2ludmV5U2VydmljZSkgeyB9XG5cblxuICAgIGFzeW5jIGdldENvbW1lbnRzQnlPcmRlcklkKG9yZGVyZElkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5LmVxdWFsVG8oXCJQYXJlbnRJZFwiLCBvcmRlcmRJZCk7XG5cbiAgICAgICAgbGV0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IHRoaXMuY2FzZUNvbW1lbnRzU3RvcmUuZmluZChxdWVyeSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbW1lbnRzTGlzdC5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29ya09yZGVyQ29tbWVudChjb21tZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBhZGRDb21tZW50KG9yZGVySWQ6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNhc2VDb21tZW50c1N0b3JlLnNhdmUoe1xuICAgICAgICAgICAgUGFyZW50SWQ6IG9yZGVySWQsXG4gICAgICAgICAgICBDb21tZW50Qm9keTogY29tbWVudFxuICAgICAgICB9KTtcbiAgICB9XG59Il19