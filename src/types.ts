export type MapLocation = {
    lat?: Number;
    lng?: Number;
}

export type Tournament = {
    name: string;
    date: Date;
    description: string;
}

export const emptyTournament: Tournament = {
    name: "",
    date: new Date(),
    description: ""};