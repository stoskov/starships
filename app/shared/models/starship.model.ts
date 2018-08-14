import { moduleDef } from "../../../node_modules/@angular/core/src/view";

export class Starship {
    url: string;
    name: string;
    model: string;
    imageUrl: string;

    get id() {
        return this.url;
    }

    constructor(url, name, model, imageUrl) {
        this.url = url;
        this.name = name;
        this.model = model;
        this.imageUrl = imageUrl;
    }
}