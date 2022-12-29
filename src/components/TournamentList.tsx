import {Tournament} from "../types";
import {For, Switch, Match, useContext} from "solid-js";
import {TournamentInfo} from "./TournamentInfo";
import {TournamentsTable, TournamentsTableHeader} from "../styles";
import {TournamentCalendarContext} from "../App";

export function TournamentList() {

    const [state] = useContext(TournamentCalendarContext);

    return (
        <Switch>
            <Match when={state.loading} keyed={true}>
                <p>Loading...</p>
            </Match>
            <Match when={state.error} keyed={true}>
                <p>Error: {error}</p>
            </Match>
            <Match when={state.tournaments} keyed={true}>
                <a href='/add'>Add new</a>
                <TournamentsTable>
                    <thead>
                    <tr>
                        <TournamentsTableHeader>NAME</TournamentsTableHeader>
                        <TournamentsTableHeader>DATE</TournamentsTableHeader>
                        <TournamentsTableHeader>LOCATION</TournamentsTableHeader>
                        <TournamentsTableHeader>DETAILS</TournamentsTableHeader>
                    </tr>
                    </thead>
                    <For each={state.tournaments}>
                        {(tournament: Tournament) => {
                            return (<TournamentInfo tournament={tournament}/>)
                        }}
                    </For>
                </TournamentsTable>
            </Match>
        </Switch>

    );
}