import { moduleDef } from "@angular/core/src/view";

export class Starship {
    id: string;
    url: string;
    name: string;
    model: string;
    imageUrl: string;
    manufacturer: string;
    length: string;
    maxSpeed: string;
    crew: string;
    passengers: string;
    consumables: string;

    constructor(starshipData) {
        this.id = starshipData.url.replace("https://swapi.co/api/starships/", "").replace("/", "");
        this.imageUrl = "https://raw.githubusercontent.com/rdlauer/starwarsimages/master/images/" + this.id + ".jpg";

        this.url = starshipData.url;
        this.name = starshipData.name;
        this.model = starshipData.model;
        this.manufacturer = starshipData.manufacturer;
        this.length = starshipData.length;
        this.maxSpeed = starshipData.max_atmosphering_speed;
        this.crew = starshipData.crew;
        this.passengers = starshipData.passengers;
        this.consumables = starshipData.consumables;
    }
}