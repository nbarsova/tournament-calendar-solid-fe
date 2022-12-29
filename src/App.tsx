import 'solid-devtools';
import type {Component} from 'solid-js';

import {Router, Route, Routes} from "@solidjs/router";
import {TournamentList} from "./components/TournamentList";
import {AddTournament} from "./components/AddTournament";
import {QueryClient, QueryClientProvider} from "@tanstack/solid-query";
import {createContext, createEffect, createResource} from "solid-js";
import {createStore} from "solid-js/store";
import {TournamentCalendarStore} from "./store/TournamentCalendarStore";
import {Tournament, Location} from "./types";
import {fetchTournaments} from "./api/tournaments";
import {fetchLocations} from "./api/locations";


const queryClient = new QueryClient();

const emptyStore: TournamentCalendarStore = {
    locations: [],
    tournaments: [],
    loading: false,
    error: ""
}

export const TournamentCalendarContext = createContext([emptyStore, {}]);

const App: Component = () => {

    const [store, setStore] = createStore(emptyStore);
    const [tournamentData] = createResource(fetchTournaments);
    const [locationData] = createResource(fetchLocations);

    console.log("tournamentData", tournamentData());
    console.log("locationData", locationData());

    createEffect(()=> {
        if (tournamentData() && tournamentData().loading ) {
            setStore("loading", true);
        }
        if (tournamentData() && tournamentData().error) {
            setStore("error", "error fetching"+tournamentData().error || locationData().error);
        }
        if (tournamentData()) {
            setStore("tournaments", tournamentData());
        }

        if (locationData() && locationData().loading ) {
            setStore("loading", true);
        }
        if (locationData() && locationData().error) {
            setStore("error", "error fetching"+ locationData().error);
        }
        if (locationData()) {
            setStore("locations", locationData());
        }
    });

    const tournamentStoreContext = [
        store,
        {
          setLocations(locations: Array<Location>) {
              setStore("locations", locations);
            },
            setTournaments(tournaments: Array<Tournament>) {
                setStore("tournaments", tournaments);
            },
            setLoading(loading: boolean) {
                setStore("loading", loading);
            },
            setError(error: string) {
                setStore("error", error);
            }
        },
    ];

    return (
        <QueryClientProvider client={queryClient}>
            <TournamentCalendarContext.Provider
                value={tournamentStoreContext}>
            <Router>
            <h2>Tournaments calendar</h2>
                <Routes>
                    <Route path="/" component={TournamentList}/>
                    <Route path="/add" component={AddTournament}/>
                </Routes>
            </Router>
            </TournamentCalendarContext.Provider>
        </QueryClientProvider>
    );
};

export default App;
