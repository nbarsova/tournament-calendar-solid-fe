import {Tournament} from "../types";
import {For, Switch, Match} from "solid-js";
import {TournamentInfo} from "./TournamentInfo";
import { createQuery } from '@tanstack/solid-query'
import {fetchTournaments} from "../api/tournaments";

export function TournamentList() {

    const query = createQuery(() => ['tournaments'], fetchTournaments)

    return (
        <Switch>
            <Match when={query.isLoading}>
                <p>Loading...</p>
            </Match>
            <Match when={query.isError}>
                <p>Error: {query.error.message}</p>
            </Match>
            <Match when={query.isSuccess}>
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DATE</th>
                        <th>DESCRIPTION</th>
                    </tr>
                    </thead>
                    <For each={query.data}>
                        {(tournament: Tournament) => <TournamentInfo tournament={tournament}/>}
                    </For>
                </table>
            </Match>
        </Switch>

    );
}