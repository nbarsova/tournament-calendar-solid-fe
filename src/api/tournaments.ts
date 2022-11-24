import {Tournament} from "../types";
import {buildTournament} from "../util/tournaments";
import {getCurrentHost} from "./apiConfig";

const host = getCurrentHost();

export async function fetchTournaments() {
    let tournamentResponse: Response = await fetch(host+"tournaments");
    let tournamentJSON = await tournamentResponse.json();
    const obj = tournamentJSON.map((tournament: JSON)=>buildTournament(tournament));
    console.log("obj", obj)
    return obj;
}

export async function addNewTournament(tournament: Tournament) {
    await fetch(host+'tournaments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
    })
}