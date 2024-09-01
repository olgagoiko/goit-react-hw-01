import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = friends => {
  return (
    <div className={s.friendsWrapper}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
