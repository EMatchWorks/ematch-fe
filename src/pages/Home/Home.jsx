import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>item1</div>
      <div className={styles.item}>item2</div>
      <div className={styles.item}>item3</div>
      <div className={styles.item}>item4</div>
    </div>
  );
};

export default Home;
