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
