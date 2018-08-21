export class WorkOrder {
    id: string;
    status: string;
    priority: string;
    subject: string;
    description: string;
    createdDate: Date;

    constructor(workOrderData) {
        this.id = workOrderData._id;
        this.status = workOrderData.Status;
        this.priority = workOrderData.Priority;
        this.subject = workOrderData.Subject;
        this.description = workOrderData.Description;
        this.createdDate = workOrderData.CreatedDate;
    }
}