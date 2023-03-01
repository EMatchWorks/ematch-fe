import { NavLink } from 'react-router-dom';
import LogoSVG from '../../../assets/icons/Logo/LogoSVG';
import styles from './Logo.module.scss';

interface Props {
  className: string;
}

const Logo = (props: Props) => {
  return (
    <div className={props.className + ' ' + styles.container}>
      <NavLink to="." end className={styles.logo}>
        <LogoSVG />
      </NavLink>
    </div>
  );
};

export default Logo;
