import { Component, OnInit, Input } from "@angular/core";
import { WorkOrderStatus } from '~/shared/enums/work-order-status';

@Component({
    selector: "Status",
    moduleId: module.id,
    templateUrl: "./status.component.html",
})
export class StatusComponent implements OnInit {
    @Input()
    status: string = "";
    bgColor: string = "green";
    color: string = "white";

    constructor() { }

    ngOnInit(): void {
        if (this.status === WorkOrderStatus.New) {
            this.bgColor = "red";
        } else if (this.status === WorkOrderStatus.Working) {
            this.bgColor = "orange";
        } else {
            this.bgColor = "green";
        }

    }
}
