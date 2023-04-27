import React from 'react';
import { useState, useEffect } from 'react';
import avatarDefault from '../../assets/AvatarIcon/AvatarDefault.jpg';
import UserAvatarService from '../../services/UserAvatarService';
import Preloader from '../../assets/preloader/Preloader';
import styles from './Avatar.module.scss';
type AvatarProps = {
  id: number;
};

const Avatar = (props: AvatarProps) => {
  const [avatar, setAvatar] = useState(avatarDefault);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        let response = await UserAvatarService.fetchUserAvatar(props.id);

        let avatar = response.data.img;
        if (avatar) {
          setAvatar(avatar);
        }
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.preloader}>
        <Preloader />
      </div>
    );
  } else {
    return <img src={avatar} />;
  }
};

export default Avatar;
