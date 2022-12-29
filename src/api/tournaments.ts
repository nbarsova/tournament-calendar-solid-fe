import {Tournament} from "../types";
import {getCurrentHost} from "./apiConfig";

const host = getCurrentHost();

export async function fetchTournaments() {
    try {
        console.log("Fetching tournaments")
        let tournamentResponse: Response = await fetch(host+"tournaments");
        let tournamentJSON = await tournamentResponse.json();
        console.log("fetched", tournamentJSON);
        return tournamentJSON;
    } catch (error) {
        console.log("error", error);
        return null;
    }

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