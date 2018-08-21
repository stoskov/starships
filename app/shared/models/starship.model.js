"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Starship = /** @class */ (function () {
    function Starship(starshipData) {
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
    return Starship;
}());
exports.Starship = Starship;
