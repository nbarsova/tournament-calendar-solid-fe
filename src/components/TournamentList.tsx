import {Tournament} from "../types";
import {For, Switch, Match} from "solid-js";
import {TournamentInfo} from "./TournamentInfo";
import { createQuery } from '@tanstack/solid-query'
import {fetchTournaments} from "../api/tournaments";
import {TournamentsTable, TournamentsTableHeader} from "../styles";

export function TournamentList() {

    const query = createQuery(() => ['tournaments'], fetchTournaments);
    console.log("tournaments", query.data)

    return (
        <Switch>
            <Match when={query.isLoading}>
                <p>Loading...</p>
            </Match>
            <Match when={query.isError}>
                <p>Error: {query.error.message}</p>
            </Match>
            <Match when={query.isSuccess}>
                <TournamentsTable>
                    <thead>
                    <tr>
                        <TournamentsTableHeader>NAME</TournamentsTableHeader>
                        <TournamentsTableHeader>DATE</TournamentsTableHeader>
                        <TournamentsTableHeader>LOCATION</TournamentsTableHeader>
                        <TournamentsTableHeader>DETAILS</TournamentsTableHeader>
                    </tr>
                    </thead>
                    <For each={query.data}>
                        {(tournament: Tournament) => {
                            return (<TournamentInfo tournament={tournament}/>)
                        }}
                    </For>
                </TournamentsTable>
            </Match>
        </Switch>

    );
}