import { NavLink } from 'react-router-dom';
import LogoSVG from '../../../assets/icons/Logo/LogoSVG';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to="." end className={styles.container}>
      <LogoSVG />
    </NavLink>
  );
};

export default Logo;
