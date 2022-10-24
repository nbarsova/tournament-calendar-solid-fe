import {emptyTournament, Tournament} from "../types";

export const buildTournament = (tournamentJSON: object) => {
    let tournamentObject:Tournament=new Tournament();

    // @ts-ignore
    tournamentObject.name = tournamentJSON.name;
    // @ts-ignore
    tournamentObject.description = tournamentJSON.description;
    // @ts-ignore
    tournamentObject.date = new Date(tournamentJSON.date);
    return tournamentObject;
}

export const formatDateForInput = (date: Date) => {
    let normalMonth = Number(date.getMonth()+1);
    console.log("normal month", normalMonth);
    let month = normalMonth>=10 ? normalMonth : "0"+ normalMonth;
    return date.getFullYear()+"-"+month+"-"+date.getDate();
}