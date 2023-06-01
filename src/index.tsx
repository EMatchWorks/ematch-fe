import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import UserStore from './store/userStore';
import NewsStore from './store/newsStore';
import MatchStore from './store/matchStore';
import ErrorStore from './store/errorStore';
import TeamStore from './store/teamStore';
import LoadMatch from './store/loadMatch';

interface State {
  userStore: UserStore;
  newsStore: NewsStore;
  matchStore: MatchStore;
  loadMatch: LoadMatch;
  teamStore: TeamStore;
}

const userStore = new UserStore();
const newsStore = new NewsStore();
const matchStore = new MatchStore();
const teamStore = new TeamStore();
const loadMatch = new LoadMatch();

export const Context = createContext<State>({
  userStore,
  newsStore,
  matchStore,
  teamStore,
  loadMatch,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Context.Provider
    value={{ userStore, newsStore, matchStore, teamStore, loadMatch }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
);
