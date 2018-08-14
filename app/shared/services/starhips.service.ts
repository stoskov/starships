import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http"
import { Starship } from "~/shared/models/starship.model";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class StarshipsService {
    private starshipsUrl = "https://swapi.co/api/starships";

    constructor(private http: Http) {

    }


    getAllStarships() {
        let headers = this.getCommonHeaders();

        return this.http.get(this.starshipsUrl, { headers })
            .pipe(
                // map(res => res.json()),
                map(res => {
                    let data = res.json();
                    let starshipsList = [];

                    data.results.forEach((starship) => {
                        let id = starship.url.replace("https://swapi.co/api/starships/", "").replace("/", "");
                        let imageUrl = "https://raw.githubusercontent.com/rdlauer/starwarsimages/master/images/" + id + ".jpg";
                        starshipsList.push(new Starship(starship.url, starship.name, starship.model, imageUrl));
                    });

                    return starshipsList;
                }),
                catchError(this.handleErrors)
            )
    }

    getCommonHeaders() {
        let headers = new Headers();

        headers.append("Content-Type", "application/json");

        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}