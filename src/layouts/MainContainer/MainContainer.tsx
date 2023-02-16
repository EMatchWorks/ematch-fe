import React, { ReactNode } from 'react';
import styles from './MainContainer.module.scss';

type MainContainerProps = {
  className: string;
  children?: ReactNode;
};

const MainContainer = ({ children, className }: MainContainerProps) => {
  return <div className={className + ' ' + styles.container}>{children}</div>;
};

export default MainContainer;
