import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import UserStore from './store/userStore';
import NewsStore from './store/newsStore';

interface State {
  userStore: UserStore;
  newsStore: NewsStore;
}

const userStore = new UserStore();
const newsStore = new NewsStore();

export const Context = createContext<State>({
  userStore,
  newsStore,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Context.Provider value={{ userStore, newsStore }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
);
