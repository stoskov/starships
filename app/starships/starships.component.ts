import { Component, OnInit } from "@angular/core";
import { StarshipsService } from "~/shared/services/starships.service";
import { Starship } from "~/shared/models/starship.model";
import { ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./starships.component.html",
    styleUrls: ["./starships.component.css"],
    providers: [StarshipsService]
})
export class StarshipsComponent implements OnInit {
    starhipsList: Array<Starship> = [];
    isLoading = true;

    constructor(private starshipsService: StarshipsService, private routerExtensions: RouterExtensions, private router: Router) { }

    ngOnInit(): void {
        this.starshipsService.getAllStarships()
            .then((data) => {
                this.starhipsList = data;
                this.isLoading = false;
            });
    }

    onTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this.routerExtensions.navigate([{ outlets: { starships: ["starship-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }
}
