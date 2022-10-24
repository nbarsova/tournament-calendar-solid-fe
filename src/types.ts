export type MapLocation = {
    lat?: Number;
    lng?: Number;
}

export type Tournament = {
    name: string;
    date: string;
    description: string;
}

export const emptyTournament: Tournament = {
    name: "",
    date: "",
    description: ""};