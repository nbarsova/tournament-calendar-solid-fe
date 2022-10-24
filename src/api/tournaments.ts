import {Tournament} from "../types";
import {buildTournament} from "../util/tournaments";

export async function fetchTournaments() {
    let tournamentResponse: Response = await fetch("http://localhost:8080/tournaments");
    let tournamentJSON = await tournamentResponse.json();
    const obj = tournamentJSON.map((tournament: JSON)=>buildTournament(tournament));
    console.log("obj", obj)
    return obj;
}

export async function addNewTournament(tournament: Tournament) {
    await fetch('http://localhost:8080/tournaments', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
    })
}