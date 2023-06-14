import React, { useEffect } from 'react';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../assets/preloader/Preloader';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className={styles.preloader}>
        <Preloader />
      </div>
    </>
  );
};

export default NotFound;
