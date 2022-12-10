import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = (props: { title: string; text: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default Paragraph;
