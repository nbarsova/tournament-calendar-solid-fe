import {createSignal, JSX, useContext, For} from "solid-js";

import {addNewTournament} from "../api/tournaments";
import {createMutation} from '@tanstack/solid-query'
import {formatDateForInput} from "../util/tournaments";
import {AddButton, AddTournamentForm} from "../styles";
import {Tournament, Location} from "../types";
import {TournamentCalendarContext} from "../App";

const emptyTournament = new Tournament();

export function AddTournament() {
    const [newTournament, setNewTournament] = createSignal<Tournament>(new Tournament());

    const [store] = useContext(TournamentCalendarContext);

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
        <input type="text" value={newTournament().description} onInput={(e) => {
            setNewTournament({ ...newTournament(), descriptionLink: e.currentTarget.value });
        }}/>

        <p>Location</p>
        <select id="location">
            <For each={store.locations}>
                {(location: Location) => {
                    return (<option value={location.id}>{location.name}</option>)
                }}
            </For>
        </select>
        <AddButton onClick={addTournament}>Add</AddButton>

        <a href='/'>back to all tournaments</a>
    </AddTournamentForm>);
}