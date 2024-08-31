import React from 'react';
import 'modern-normalize';
import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={s.name}>Petra Marica</p>
        <p>@pmarica</p>
        <p>Salvador, Brasil</p>
      </div>

      <ul className={s.items}>
        <li className={s.item}>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
