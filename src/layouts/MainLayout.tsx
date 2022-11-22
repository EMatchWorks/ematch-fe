import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/Navigation/Logo/Logo';
import SideBar from '../components/Navigation/SideBar/SideBar';
import UserSideBar from '../components/Navigation/UserSideBar/UserSideBar';

const MainLayout = () => {
  return (
    <>
      <Logo />
      <SideBar />
      <UserSideBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
