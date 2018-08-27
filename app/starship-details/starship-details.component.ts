import { Component, OnInit } from "@angular/core";
import { StarshipsService } from "~/shared/services/starships.service";
import { WorkOrdersService } from "~/shared/services/workorders.service";
import { Starship } from "~/shared/models/starship.model";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { WorkOrder } from "~/shared/models/work-order.model";
import { KinveyService } from "~/shared/services/kinvey.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./starship-details.component.html",
    styleUrls: ["./starship-details.component.css"],
    providers: [StarshipsService, WorkOrdersService, KinveyService]
})
export class StarshipDetailsComponent implements OnInit {
    starship: Object = {};
    isLoading = true;
    workOrdersList: Array<WorkOrder> = []

    constructor(
        private starshipsService: StarshipsService,
        private workOrdersService: WorkOrdersService,
        private routerExtensions: RouterExtensions,
        private pageRoute: PageRoute) { }

    ngOnInit(): void {
        this.pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                return this.loadData(params.id);
                // return this.loadData("5");
            });
    }

    onTapOrder(args) {
        const tappedCarItem = args.view.bindingContext;

        this.routerExtensions.navigate([{ outlets: { starships: ["work-order-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }

    private async loadData(starshipId: string) {
        this.starship = await this.starshipsService.getStarshipById(starshipId);
        this.workOrdersList = await this.workOrdersService.getWorkOrderPerStarshipId(starshipId);

        this.isLoading = false;
    }
}
