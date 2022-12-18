import React from 'react';

import s from './UserProfilePage.module.scss';

// todo: container, info & repos components
const UserProfilePage: React.FC = () => {
  return (
    <div className="container">
      <section className={s['user-profile']}>
        <div className={s['user-profile__image-container']}>
          <img className={s['user-profile__image']} src="http://placeimg.com/640/480/any" alt="defunkt profile photo" />
        </div>
        <div>
          <h1 className={s['user-profile__title']}>
            Chris Wanstrath, <span className={s['user-profile__accent']}>defunct</span>
          </h1>
          <p className={s['user-profile__text']}>
            <span className={s['user-profile__accent']}>21.3k</span> followers ·{' '}
            <span className={s['user-profile__accent']}>210</span> following ·{' '}
            <a href="pages/UserProfilePage/UserProfilePage" className="link">
              http://chriswanstrath.com/
            </a>
          </p>
        </div>
      </section>

      <section className={s['repository-list']}>
        <div className={s['repository-list__header']}>
          <h2 className={s['repository-list__title']}>Репозитории</h2>
          <a href="https://github.com/defunkt?tab=repositories" className="link" target="_blank" rel="noreferrer">
            Все репозитории
          </a>
        </div>

        <div className={s['repository-list__container']}>
          {[1, 2, 3, 4, 5].map((item) => (
            <section className={s['repository-list__item']} key={item}>
              <h3 className={s['repository-list__item-title']}>
                <a href="/src/pages" className="link">
                  body_matcher
                </a>
              </h3>
              <p className={s['repository-list__item-text']}>Simplify your view testing. Forget assert_select.</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default React.memo(UserProfilePage);
