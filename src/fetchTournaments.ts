import {Tournament} from "./types";

export async function fetchTournaments() {
    let tournamentResponse: Response = await fetch("http://localhost:8080/tournaments");
    let tournamentJSON = await tournamentResponse.json();
    return tournamentJSON as Tournament [];
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