import React from 'react';
import s from './UsersList.module.scss';

const UsersList: React.FC = () => {
  return (
    <div className={s['users-list']}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <section className={s['users-list__item']} key={item}>
          <div className={s['users-list__image-container']}>
            <img className={s['users-list__image']} src="http://placeimg.com/640/480/any" alt="defunkt profile photo" />
          </div>
          <div>
            <h2>
              <a href="/src/pages" className="link">
                defunkt
              </a>
              , 15 репозиториев
            </h2>
            <p className={s['users-list__text']}>Название организации</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default React.memo(UsersList);
