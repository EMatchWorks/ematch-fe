import { useEffect } from 'react';
import NewsPost from '../../components/NewsPost/NewsPost';
import styles from './News.module.scss';
import Preloader from '../../assets/preloader/Preloader';
import { Link } from 'react-router-dom';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadNews } from '../../store/newsSlice';

const News = () => {
  const dispatch = useAppDispatch();
  const { news, isLoading } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <div>
          {news.map((post, index) => (
            <NewsPost title={post.title} text={post.content} key={index} />
          ))}
        </div>
      )}
      <Link to={'./add_news'} className={styles.buttonCreate}>
        <img src={Plus} alt="" />
      </Link>
    </div>
  );
};

export default News;
