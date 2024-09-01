import s from './FriendListItem.module.css';

const FriendListItem = (avatar, name, isOnline) => {
  return (
    <div className={s.friendItem}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? s.isOnline : s.isOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
