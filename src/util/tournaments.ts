import {Tournament} from "../types";

export const buildTournament = (tournamentJSON: any) => {
    let tournamentObject:Tournament=new Tournament();
    tournamentObject.name = tournamentJSON.name;
    tournamentObject.description = tournamentJSON.description;
    tournamentObject.date = new Date(tournamentJSON.date);
    return tournamentObject;
}

export const formatDateForInput = (date: Date) => {
    let normalMonth = Number(date.getMonth()+1);
    let month = normalMonth>=10 ? normalMonth : "0"+ normalMonth;
    return date.getFullYear()+"-"+month+"-"+date.getDate();
}