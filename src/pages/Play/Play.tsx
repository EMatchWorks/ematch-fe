import CreateMatch from '../../components/CreateMatch/CreateMatch';
import MatchesList from '../../components/MatchesList/MatchesList';
import styles from './Play.module.scss';

const Play = () => {
  return (
    <div className={styles.container}>
      <div className={styles.matchesList}>
        <MatchesList />
      </div>
    </div>
  );
};

export default Play;
