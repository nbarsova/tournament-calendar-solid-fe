import {Tournament} from "../types";

interface TournamentInfoProps {
    tournament: Tournament;
}

export function TournamentInfo(props: TournamentInfoProps) {
    return (
        <tr>
            <td>{props.tournament.name}</td>
            <td>{props.tournament.date.toDateString()}</td>
            <td>{props.tournament.location?.name}</td>
            <td><a href={props.tournament.descriptionLink}>details</a></td>
        </tr>
    );
}