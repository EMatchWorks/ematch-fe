import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/Navigation/Logo/Logo';
import SideBar from '../../components/Navigation/SideBar/SideBar';
import TopBar from '../../components/Navigation/TopBar/TopBar';
// import UserSideBar from '../../components/Navigation/UserSideBar/UserSideBar';
import MainContainer from '../MainContainer/MainContainer';
import styles from './PublicMainLayout.module.scss';

const PublicMainLayout = () => {
  return (
    <div className={styles.grid}>
      <Logo className={styles.gridItem} />
      <TopBar className={styles.gridItem} />

      <MainContainer className={styles.gridItem}>
        <Outlet />
      </MainContainer>
      {/* <Errors /> */}
    </div>
  );
};

export default PublicMainLayout;
