import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout/MainLayout';
import Anticheat from '../pages/Anticheat/Anticheat';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Match from '../pages/Match/Match';
import News from '../pages/News/News';
import NotFound from '../pages/NotFound/NotFound';
import Play from '../pages/Play/Play';
import Registration from '../pages/Registration/Registration';
import Teams from '../pages/Teams/Teams';
import Tournaments from '../pages/Tournaments/Tournaments';
import User from '../pages/User/User';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="play">
          <Route index element={<Play />} />
          <Route path=":match_id" element={<Match />} />
        </Route>
        <Route path="news" element={<News />} />
        <Route path="user" element={<User />} />
        <Route path="teams" element={<Teams />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="anticheat" element={<Anticheat />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
