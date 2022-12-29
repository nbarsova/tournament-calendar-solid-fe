export class Location {
    id: number;
    lat?: Number;
    lng?: Number;
    name: string;
    county: string;

    constructor(newId: number, newName: string, newCounty: string) {
        this.id = newId;
        this.name = newName;
        this.county = newCounty;
    }
}

export class Tournament {
    id?: number;
    name: string;
    date: Date;
    description: string;
    location?: Location;

    constructor() {
        this.name = "";
        this.date = new Date();
        this.description = "";
    }
}