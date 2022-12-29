import {Tournament} from "../types";

interface TournamentInfoProps {
    tournament: Tournament;
}

export function TournamentInfo(props: TournamentInfoProps) {
    return (
        <tr>
            <td>{props.tournament.name}</td>
            <td>{props.tournament.date}</td>
            <td>{props.tournament.location?.name}, {props.tournament.location?.county}</td>
            <td><a href={props.tournament.descriptionLink}>details</a></td>
        </tr>
    );
}