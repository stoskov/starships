import { Component, OnInit } from "@angular/core";
import { StarshipsService } from "~/shared/services/starhips.service";
import { Starship } from "~/shared/models/starship.model";
import { ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./starships.component.html",
    styleUrls: ["./starships.component.css"],
    providers: [StarshipsService]
})
export class StarshipsComponent implements OnInit {
    starhipsList: Array<Starship> = [];
    isLoading = false;

    constructor(private starshipsService: StarshipsService, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.starshipsService.getAllStarships()
            .subscribe((data) => {
                this.starhipsList = data;
                this.isLoading = false;                
            });
    }

    onTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        // this.routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id], {
        //     animated: true,
        //     transition: {
        //         name: "slide",
        //         duration: 200,
        //         curve: "ease"
        //     }
        // });
    }
}
