import type { Component } from 'solid-js';

import styles from './App.module.css';
import {createResource} from "solid-js";
import { fetchTournaments} from "./fetchTournaments";
import {TournamentList} from "./components/TournamentList";
import {AddTournament} from "./components/AddTournament";

const App: Component = () => {
  const [tournaments, { refetch }] = createResource(fetchTournaments);

  return (
      <div class={styles.App}>
        <header>Tournaments calendar</header>
        <TournamentList
            tournaments={tournaments} />

         <AddTournament refetch={refetch}/>
      </div>
  );
};

export default App;
