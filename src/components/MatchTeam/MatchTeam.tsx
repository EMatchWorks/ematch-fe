
import styles from './MatchTeam.module.scss';
import MatchUser from '../MatchUser/MatchUser';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { MembershipDto } from '../../models/Match/IMatch';

type MatchTeamProps = {
  team: null[] | MembershipDto[];
  addUser: (id: number) => void;
  teamID: number;
};

const MatchTeam = (props: MatchTeamProps) => {
  return (
    <div className={styles.container}>
      {props.team.map((user, index) =>
        user === null ? (
          <div
            onClick={() => props.addUser(props.teamID)}
            className={styles.cell}
            key={index}
          >
            <img src={Plus} alt="plus" />
          </div>
        ) : (
          <MatchUser user={user.userId} key={index} />
        ),
      )}
    </div>
  );
};

export default MatchTeam;
