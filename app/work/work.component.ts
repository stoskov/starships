import { Component, OnInit } from "@angular/core";
import { ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";
import { WorkOrder } from '~/shared/models/work-order.model';
import { WorkOrdersService } from '~/shared/services/workorders.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./work.component.html",
    providers: [WorkOrdersService]
})
export class WorkComponent implements OnInit {
    workOrdersList: Array<WorkOrder> = [];
    isLoading = true;

    constructor(
        private workOrdersService: WorkOrdersService,
        private routerExtensions: RouterExtensions,
        private router: Router) { }

    ngOnInit(): void {
        this.workOrdersService.getAllWorkOrders()
            .then((data) => {
                this.workOrdersList = data;
                this.isLoading = false;
            });
    }

    onTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this.routerExtensions.navigate([{ outlets: { work: ["work-order-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }
}
