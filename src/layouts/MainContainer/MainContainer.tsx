import React, { ReactNode } from "react";
import styles from "./MainContainer.module.scss";

interface Props {
  children?: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
