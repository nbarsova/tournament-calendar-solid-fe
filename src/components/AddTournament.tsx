import {createSignal, JSX} from "solid-js";
import {emptyTournament, Tournament} from "../types";
import {addNewTournament} from "../api/tournaments";
import {createMutation} from '@tanstack/solid-query'
import {formatDateForInput} from "../util/tournaments";
import {AddButton, AddTournamentForm} from "../styles";

export function AddTournament() {
    const [newTournament, setNewTournament] = createSignal(emptyTournament);

    const mutation = createMutation(['tournaments'], (tournament: Tournament) => {
        return addNewTournament(tournament);
    });

    const addTournament: JSX.EventHandler<HTMLButtonElement, MouseEvent> = async (event) => {
        try {
            event.preventDefault();

        mutation.mutate(newTournament());
        setNewTournament(emptyTournament);
        } catch (error) {
            console.log('error saving', error);
        }
    };

    return (<AddTournamentForm>
        <h4>Add new tournament</h4>
        <p>Tournament name:</p>
        <input type="text" value={newTournament().name} onInput={(e) => {
           setNewTournament({ ...newTournament(), name: e.currentTarget.value });
        }}/>
        <p>Tournament date:</p>
        <input type="date" value={formatDateForInput(newTournament().date)} onInput={(e) => {
            setNewTournament({ ...newTournament(), date: new Date(e.currentTarget.value) });
        }}/>
        <p>Link to details:</p>
        <input type="text" value={newTournament().descriptionLink} onInput={(e) => {
            setNewTournament({ ...newTournament(), description: e.currentTarget.value });
        }}/>

        <p>Location</p>
        <input type="text" value={newTournament().location?.name || ""} onInput={(e) => {
            setNewTournament({ ...newTournament(), location: {
                name: e.currentTarget.value
                } });
        }}/>
        <AddButton onClick={addTournament}>Add</AddButton>

        <a href='/'>back to all tournaments</a>
    </AddTournamentForm>);
}