import {Tournament} from "../types";
import {For, Resource} from "solid-js";
import {TournamentInfo} from "./TournamentInfo";

interface TournamentListProps {
    tournaments: Resource<Tournament[]>;
}

export function TournamentList(props: TournamentListProps) {
    return (
        <table>
            <thead>
            <tr>
                <th>NAME</th>
                <th>DATE</th>
                <th>LOCATION</th>
                <th>DESCRIPTION</th>
            </tr>
            </thead>
            <For each={props.tournaments()}>
                {(tournament: Tournament) => <TournamentInfo tournament={tournament}/>}
            </For>
        </table>
    );
}