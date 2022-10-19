import {createSignal, JSX} from "solid-js";
import {emptyTournament} from "../types";
import {addNewTournament} from "../fetchTournaments";

interface AddTournamentProps {
    refetch:any
}

export function AddTournament(props: AddTournamentProps) {
    const [newTournament, setNewTournament] = createSignal(emptyTournament);

    const addTournament: JSX.EventHandler<HTMLButtonElement, MouseEvent> = async (event) => {
        event.preventDefault();
        await addNewTournament(newTournament());
        props.refetch();
        setNewTournament(emptyTournament);
    };
    return (<>
        <input type="text" value={newTournament().name} onInput={(e) => {
            setNewTournament({ ...newTournament(), name: e.currentTarget.value });
        }}/>

        <input type="date" value={newTournament().date?.toDateString()} onInput={(e) => {
            setNewTournament({ ...newTournament(), date: new Date(e.currentTarget.value) });
        }}/>

        <input type="text" value={newTournament().description} onInput={(e) => {
            setNewTournament({ ...newTournament(), description: e.currentTarget.value });
        }}/>

        <button onClick={addTournament}>Add</button>
    </>);
}