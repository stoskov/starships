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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBYUksa0JBQVksWUFBWTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsR0FBRyx5RUFBeUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUU3RyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZHVsZURlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFyc2hpcCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbW9kZWw6IHN0cmluZztcbiAgICBpbWFnZVVybDogc3RyaW5nO1xuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICAgIGxlbmd0aDogc3RyaW5nO1xuICAgIG1heFNwZWVkOiBzdHJpbmc7XG4gICAgY3Jldzogc3RyaW5nO1xuICAgIHBhc3NlbmdlcnM6IHN0cmluZztcbiAgICBjb25zdW1hYmxlczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnNoaXBEYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBzdGFyc2hpcERhdGEudXJsLnJlcGxhY2UoXCJodHRwczovL3N3YXBpLmNvL2FwaS9zdGFyc2hpcHMvXCIsIFwiXCIpLnJlcGxhY2UoXCIvXCIsIFwiXCIpO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcmRsYXVlci9zdGFyd2Fyc2ltYWdlcy9tYXN0ZXIvaW1hZ2VzL1wiICsgdGhpcy5pZCArIFwiLmpwZ1wiO1xuXG4gICAgICAgIHRoaXMudXJsID0gc3RhcnNoaXBEYXRhLnVybDtcbiAgICAgICAgdGhpcy5uYW1lID0gc3RhcnNoaXBEYXRhLm5hbWU7XG4gICAgICAgIHRoaXMubW9kZWwgPSBzdGFyc2hpcERhdGEubW9kZWw7XG4gICAgICAgIHRoaXMubWFudWZhY3R1cmVyID0gc3RhcnNoaXBEYXRhLm1hbnVmYWN0dXJlcjtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBzdGFyc2hpcERhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gc3RhcnNoaXBEYXRhLm1heF9hdG1vc3BoZXJpbmdfc3BlZWQ7XG4gICAgICAgIHRoaXMuY3JldyA9IHN0YXJzaGlwRGF0YS5jcmV3O1xuICAgICAgICB0aGlzLnBhc3NlbmdlcnMgPSBzdGFyc2hpcERhdGEucGFzc2VuZ2VycztcbiAgICAgICAgdGhpcy5jb25zdW1hYmxlcyA9IHN0YXJzaGlwRGF0YS5jb25zdW1hYmxlcztcbiAgICB9XG59Il19