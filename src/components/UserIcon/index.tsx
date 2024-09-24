import React, { useMemo } from 'react';
import './usericon.css';

interface UserIconProps {
  name: string;
  available: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({ name, available }) => {
  const initials = useMemo(() => {
    return name
      .split(' ')
      .map((word: string) => word[0])
      .join('');
  }, [name]);

  return (
    <div className='usericon-container'>
      <div className='usericon-text'>{initials}</div>
      <div className={`user-status ${available ? 'available' : ''}`}></div>
    </div>
  );
};

export default UserIcon;
