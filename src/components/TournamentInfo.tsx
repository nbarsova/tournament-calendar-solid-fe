import {Tournament} from "../types";

interface TournamentInfoProps {
    tournament: Tournament;
}

export function TournamentInfo(props: TournamentInfoProps) {
    return (
        <tr>
            <td>{props.tournament.name}</td>
            <td>{props.tournament.date}</td>
            <td>{props.tournament.description}</td>
        </tr>
    );
}