export type MapLocation = {
    lat?: Number;
    lng?: Number;
}

export class Tournament  {
    name: string;
    date: Date;
    description: string;
}

export const emptyTournament: Tournament = {
    name: "",
    date: new Date(),
    description: ""
};