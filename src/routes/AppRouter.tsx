import React from 'react';
import { Route, Routes } from "react-router-dom";

import Anticheat from '../pages/Anticheat/Anticheat';
import Main from '../pages/Main/Main';
import News from '../pages/News/News';
import NotFound from '../pages/NotFound/NotFound';
import Play from '../pages/Play/Play';
import Teams from '../pages/Teams/Teams';
import Tournaments from '../pages/Tournaments/Tournaments';
import Users from '../pages/Users/Users';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />}>
            <Route index element={<Play />} />
            <Route path="news" element={<News />} />
            <Route path="users" element={<Users />} />
            <Route path="teams" element={<Teams />} />
            <Route path="tournaments" element={<Tournaments />} />
            <Route path="anticheat" element={<Anticheat />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default AppRouter