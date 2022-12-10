import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Navigation/Logo/Logo";
import SideBar from "../components/Navigation/SideBar/SideBar";
import UserSideBar from "../components/Navigation/UserSideBar/UserSideBar";
import MainContainer from "./MainContainer/MainContainer";

const MainLayout = () => {
  return (
    <>
      <Logo />
      <SideBar />
      <UserSideBar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default MainLayout;
