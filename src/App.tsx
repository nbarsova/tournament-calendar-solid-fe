import 'solid-devtools';
import type {Component} from 'solid-js';

import {Router, Route, Routes} from "@solidjs/router";
import {TournamentList} from "./components/TournamentList";
import {AddTournament} from "./components/AddTournament";
import {QueryClient, QueryClientProvider} from "@tanstack/solid-query";

const queryClient = new QueryClient()

const App: Component = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
            <h2>Tournaments calendar</h2>
                <Routes>
                    <Route path="/add" component={AddTournament}/>
                    <Route path="/" component={TournamentList}/>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
