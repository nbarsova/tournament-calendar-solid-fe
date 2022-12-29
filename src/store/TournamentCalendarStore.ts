import {Location, Tournament} from "../types";

export type TournamentCalendarStore = {
    locations: Array<Location>,
    tournaments: Array<Tournament>,
    loading: boolean,
    error: string
}


export type TournamentCalendarStoreSetters = {
    setLocations: (locations: Array<Location>) => void,
    setTournaments: (tournaments: Array<Tournament>) => void,
    setLoading: (loading: boolean) => void,
    setError: (error: string) => void
}

export type TournamentCalendarStoreType = {
    store: TournamentCalendarStore;
    setters: TournamentCalendarStoreSetters;
}

