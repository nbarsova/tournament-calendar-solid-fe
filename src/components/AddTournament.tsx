import {createSignal, JSX} from "solid-js";
import {emptyTournament, Tournament} from "../types";
import {addNewTournament} from "../api/tournaments";
import {createMutation} from '@tanstack/solid-query'
import {formatDateForInput} from "../util/tournaments";

export function AddTournament() {
    const [newTournament, setNewTournament] = createSignal(emptyTournament);

    const mutation = createMutation(['tournaments'], (tournament: Tournament) => {
        return addNewTournament(tournament);
    });

    const addTournament: JSX.EventHandler<HTMLButtonElement, MouseEvent> = async (event) => {
        event.preventDefault();
        mutation.mutate(newTournament());
        setNewTournament(emptyTournament);
    };

    return (<>
        <input type="text" value={newTournament().name} onInput={(e) => {
           setNewTournament({ ...newTournament(), name: e.currentTarget.value });
        }}/>

        <input type="date" value={formatDateForInput(newTournament().date)} onInput={(e) => {
            setNewTournament({ ...newTournament(), date: new Date(e.currentTarget.value) });
        }}/>

        <input type="text" value={newTournament().description} onInput={(e) => {
            setNewTournament({ ...newTournament(), description: e.currentTarget.value });
        }}/>

        <button onClick={addTournament}>Add</button>

        <a href='/'>back to all tournaments</a>
    </>);
}