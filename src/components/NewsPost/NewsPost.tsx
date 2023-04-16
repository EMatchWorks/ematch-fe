import React from 'react';
import styles from './NewsPost.module.scss';

type NewsPostProps = {
  title: string;
  text: string;
};

const NewsPost = ({ title, text }: NewsPostProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default NewsPost;
