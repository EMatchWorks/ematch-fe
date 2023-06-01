import { useContext, useEffect } from 'react';
import news from '../../data/news';
import NewsPost from '../../components/NewsPost/NewsPost';
import styles from './News.module.scss';
import { Context } from '../..';
import Preloader from '../../assets/preloader/Preloader';
import { observer } from 'mobx-react-lite';

const News = () => {
  const { newsStore } = useContext(Context);

  useEffect(() => {
    newsStore.loadNews();
  }, []);

  return (
    <div className={styles.container}>
      {newsStore.isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <div>
          {newsStore.news.map((post, index) => (
            <NewsPost title={post.title} text={post.content} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(News);
