import React from "react";
import styles from "./NewsPost.module.scss";

interface Props {
  title: string;
  text: string;
}

const NewsPost = ({ title, text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default NewsPost;
