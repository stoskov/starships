import { Component, OnInit } from "@angular/core";
import { StarshipsService } from "~/shared/services/starships.service";
import { WorkOrdersService } from "~/shared/services/workorders.service";
import { Starship } from "~/shared/models/starship.model";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { WorkOrder } from "~/shared/models/work-order.model";
import { KinveyService } from "~/shared/services/kinvey.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./work-order-details.component.html",
    styleUrls: ["./work-order-details.component.css"],
    providers: [StarshipsService, WorkOrdersService, KinveyService]
})
export class WorkOrderDetailsComponent implements OnInit {
    starship: Object = {};
    isLoading = true;
    id: string;
    workOrdersList: Array<WorkOrder> = []

    constructor(
        private starshipsService: StarshipsService,
        private workOrdersService: WorkOrdersService,
        private pageRoute: PageRoute) { }

    ngOnInit(): void {
        this.pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                this.id = params.id;
                // return this.loadData(params.id);
                // return this.loadData("5");
            });
    }

    onTapOrder() {
        this.workOrdersService.getAllWorkOrders();
    }

    private async loadData(starshipId: string) {
        this.starship = await this.starshipsService.getStarshipById(starshipId);
        this.workOrdersList = await this.workOrdersService.getWorkOrderPerStarshipId(starshipId);

        this.isLoading = false;
    }
}
