import {Tournament} from "../types";
import {getCurrentHost} from "./apiConfig";

const host = getCurrentHost();

export async function fetchTournaments() {
    try {
        let tournamentResponse: Response = await fetch(host+"tournaments");
        let tournamentJSON = await tournamentResponse.json();
        return tournamentJSON;
    } catch (error) {
        console.log("error", error);
        return null;
    }

}

export async function addNewTournament(tournament: Tournament) {
    console.log("Saving tournament", tournament)
    await fetch(host+'tournaments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
    })
}