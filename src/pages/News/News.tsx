import React from 'react';
import news from '../../data/news';
import NewsPost from '../../components/NewsPost/NewsPost';
import styles from './News.module.scss';

const News = () => {
  return (
    <div className={styles.container}>
      {news.map((post) => (
        <NewsPost title={post.title} text={post.text} key={post.id} />
      ))}
    </div>
  );
};

export default News;
