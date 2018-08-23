export class WorkOrder {
    id: string;
    caseNumber: string;
    status: string;
    priority: string;
    subject: string;
    description: string;
    createdDate: string;

    constructor(workOrderData) {
        this.id = workOrderData._id;
        this.caseNumber = workOrderData.CaseNumber;
        this.status = workOrderData.Status;
        this.priority = workOrderData.Priority;
        this.subject = workOrderData.Subject;
        this.description = workOrderData.Description;
        this.createdDate = workOrderData.CreatedDate;
    }
}