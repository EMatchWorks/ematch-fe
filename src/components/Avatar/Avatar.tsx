import React from 'react';
import avatarDefault from '../../assets/AvatarIcon/AvatarDefault.png';

type AvatarProps = {
  // `id` isn't used below (see comment), so it stays loose rather than
  // forcing every caller to migrate to ematch-be's uuid string ids.
  id: number | string;
  nameAvatar?: string;
};

// Avatar upload/serving is disabled on the backend (the file module was
// removed in ematch-be), so we always fall back to the default avatar for
// now instead of hitting the now-nonexistent `/user/:id/avatar` endpoint.
const Avatar = (props: AvatarProps) => {
  return <img src={avatarDefault} alt="Avatar" />;
};

export default Avatar;
