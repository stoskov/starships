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
                map(res => {
                    let data = res.json();
                    let starshipsList = [];

                    data.results.forEach((starship) => {
                        starshipsList.push(new Starship(starship));
                    });

                    return starshipsList;
                }),
                catchError(this.handleErrors)
            ).toPromise()
    }

    getStarshipById(id: string) {
        let headers = this.getCommonHeaders();

        return this.http.get(this.starshipsUrl + "/" + id, { headers })
            .pipe(
                map(res => {
                    let data = res.json();

                    return new Starship(data);
                }),
                catchError(this.handleErrors)
            ).toPromise()
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