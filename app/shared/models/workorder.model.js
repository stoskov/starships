"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkOrder = /** @class */ (function () {
    function WorkOrder(workOrderData) {
        this.id = workOrderData._id;
        this.status = workOrderData.Status;
        this.priority = workOrderData.Priority;
        this.subject = workOrderData.Subject;
        this.description = workOrderData.Description;
        this.createdDate = workOrderData.CreatedDate;
    }
    return WorkOrder;
}());
exports.WorkOrder = WorkOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya29yZGVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFRSSxtQkFBWSxhQUFhO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2pELENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29ya09yZGVyIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHByaW9yaXR5OiBzdHJpbmc7XG4gICAgc3ViamVjdDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY3JlYXRlZERhdGU6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih3b3JrT3JkZXJEYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSB3b3JrT3JkZXJEYXRhLl9pZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB3b3JrT3JkZXJEYXRhLlN0YXR1cztcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHdvcmtPcmRlckRhdGEuUHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHdvcmtPcmRlckRhdGEuU3ViamVjdDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHdvcmtPcmRlckRhdGEuRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY3JlYXRlZERhdGUgPSB3b3JrT3JkZXJEYXRhLkNyZWF0ZWREYXRlO1xuICAgIH1cbn0iXX0=