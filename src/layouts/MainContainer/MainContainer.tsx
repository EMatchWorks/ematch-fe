import React, { ReactNode } from "react";
import styles from "./MainContainer.module.scss";

type MainContainerProps = {
  children?: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
