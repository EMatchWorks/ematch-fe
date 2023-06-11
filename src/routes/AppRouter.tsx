import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicMainLayout from '../layouts/PublicMainLayout/PublicMainLayout';
import Anticheat from '../pages/Anticheat/Anticheat';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Match from '../pages/Match/Match';
import News from '../pages/News/News';
import NotFound from '../pages/NotFound/NotFound';
import Play from '../pages/Play/Play';
import Registration from '../pages/Registration/Registration';
import Teams from '../pages/Teams/Teams';
import TournamentsList from '../pages/TournamentsList/TournamentsList';
import UserProfile from '../pages/UserProfile/UserProfile';
import UserLayout from '../layouts/UserLayout/UserLayout';
import UserTeams from '../pages/UserTeams/UserTeams';
import UserFriends from '../pages/UserFriends/UserFriends';
import Tournament from '../pages/Tournament/Tournament';
import CreateTournament from '../pages/CreateTournament/CreateTournament';
import CreateNews from '../pages/CreateNews/CreateNews';
import { Context } from '..';
import PrivateMainLayout from '../layouts/PrivateMainLayout/PrivateMainLayout';
import { observer } from 'mobx-react-lite';
import Preloader from '../assets/preloader/Preloader';
import styles from './AppRouter.module.scss';

const AppRouter = () => {
  const { userStore } = useContext(Context);
  return (
    <Routes>
      {userStore.isLoading ? (
        <>
          <Route path="*" element={<PublicMainLayout />}>
            <Route
              index
              element={
                <div className={styles.preloader}>
                  <Preloader />
                </div>
              }
            />
          </Route>
        </>
      ) : userStore.isAuth ? (
        <>
          <Route path="/" element={<PrivateMainLayout />}>
            <Route index element={<Home />} />

            <Route path="play">
              <Route index element={<Play />} />
              <Route path=":match_id" element={<Match />} />
            </Route>

            <Route path="news">
              <Route index element={<News />} />
              <Route path="add_news" element={<CreateNews />} />
            </Route>
            <Route path="teams" element={<Teams />} />

            <Route path="tournaments">
              <Route index element={<TournamentsList />} />
              <Route path="createTournament" element={<CreateTournament />} />

              <Route path=":tournament_id">
                <Route index element={<Tournament />} />
                <Route path=":match_id" element={<Match />} />
              </Route>
            </Route>

            <Route path=":user_id" element={<UserLayout />}>
              <Route index element={<UserProfile />} />
              <Route path="friends" element={<UserFriends />} />
              <Route path="teams" element={<UserTeams />} />
            </Route>

            <Route path="anticheat" element={<Anticheat />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<PublicMainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default observer(AppRouter);
