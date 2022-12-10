import React from 'react';
import news from '../../data/news';
import Paragraph from '../../components/Paragraph/Paragraph';
import styles from './News.module.scss';

const News = () => {
  return (
    <div className={styles.container}>
      {news.map((paragraph: { title: string; text: string; id: number }) => (
        <Paragraph
          title={paragraph.title}
          text={paragraph.text}
          key={paragraph.id}
        />
      ))}
    </div>
  );
};

export default News;
