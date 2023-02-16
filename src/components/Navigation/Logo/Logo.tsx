import { NavLink } from 'react-router-dom';
import LogoSVG from '../../../assets/icons/Logo/LogoSVG';
import styles from './Logo.module.scss';

interface Props {
  className: string;
}

const Logo = (props: Props) => {
  return (
    <NavLink to="." end className={props.className + ' ' + styles.container}>
      <LogoSVG />
    </NavLink>
  );
};

export default Logo;
