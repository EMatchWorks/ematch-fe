import { useTranslation } from 'react-i18next';
import styles from './MatchTeam.module.scss';
import MatchUser from '../MatchUser/MatchUser';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { MembershipDto } from '../../models/Match/IMatch';

type MatchTeamProps = {
  team: null[] | MembershipDto[];
  addUser: (id: number) => void;
  teamID: number;
  disconnectedUserIds?: Set<string>;
};

const MatchTeam = (props: MatchTeamProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {props.team.map((user, index) =>
        user === null ? (
          <div
            onClick={() => props.addUser(props.teamID)}
            className={styles.cell}
            key={index}
          >
            <img className={styles.plusIcon} src={Plus} alt="plus" />
            <span className={styles.tooltip}>{t('match.joinSlot')}</span>
          </div>
        ) : (
          <MatchUser
            user={user.userId}
            isCaptain={user.isCaptain}
            isDisconnected={props.disconnectedUserIds?.has(user.userId)}
            key={index}
          />
        ),
      )}
    </div>
  );
};

export default MatchTeam;
