import React from 'react';
import { useState, useEffect } from 'react';
import avatarDefault from '../../assets/AvatarIcon/AvatarDefault.png';
import UserAvatarService from '../../services/UserAvatarService';
import Preloader from '../../assets/preloader/Preloader';
import styles from './Avatar.module.scss';
type AvatarProps = {
  id: number;
  nameAvatar?: string;
};

const Avatar = (props: AvatarProps) => {
  const [avatar, setAvatar] = useState({ img: '', isLoading: true });
  useEffect(() => {
    (async () => {
      try {
        console.log(props.nameAvatar + ' ' + props.id);

        let response = await UserAvatarService.fetchUserAvatar(props.id);
        let avatar = response.data;
        console.log(props.nameAvatar);
        console.log(response);

        setAvatar({ img: avatar, isLoading: false });
      } catch (error) {
        console.log(error);
        setAvatar({ img: '', isLoading: false });
      }
    })();
  }, []);

  if (avatar.isLoading) {
    return (
      <div className={styles.preloader}>
        <Preloader />
      </div>
    );
  } else {
    return (
      <img
        src={avatar.img ? `data:image/png;base64,${avatar.img}` : avatarDefault}
        alt="Avatar"
      />
    );
  }
};

export default Avatar;
