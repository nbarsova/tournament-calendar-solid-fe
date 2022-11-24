export class MapLocation {
    lat?: Number;
    lng?: Number;
    name: string;

    constructor(newName: string) {
        this.name = newName;
    }
}

export class Tournament {
    name: string;
    date: Date;
    descriptionLink: string;
    location?: MapLocation;

    constructor() {
        this.name = "";
        this.date = new Date();
        this.descriptionLink = "";
    }
}

export const emptyTournament: Tournament = {
    name: "",
    date: new Date(),
    descriptionLink: ""
};