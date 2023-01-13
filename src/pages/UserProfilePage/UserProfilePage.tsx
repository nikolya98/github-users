import * as React from 'react';
import { useParams } from 'react-router-dom';

import { useUserData } from 'hooks/useUserData';

import s from './UserProfilePage.module.scss';
import { getGithubUserLink } from 'utils/getGithubUserLink';
import { getGithubUserRepoLink } from 'utils/getGithubUserRepoLink';

// todo: container, info & repos components
const UserProfilePage: React.FC = () => {
  const { id } = useParams();
  const { user } = useUserData(id || '');

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <section className={s['user-profile']}>
        <div className={s['user-profile__image-container']}>
          <img className={s['user-profile__image']} src={user.avatarUrl} alt={`${user.login} avatar`} />
        </div>
        <div>
          <h1 className={s['user-profile__title']}>
            {user.name && <>{user.name},</>}{' '}
            <a
              className={s['user-profile__accent']}
              href={getGithubUserLink(user.login)}
              target="_blank"
              rel="noreferrer"
            >
              {user.login}
            </a>
          </h1>
          <p className={s['user-profile__text']}>
            <span className={s['user-profile__accent']}>{user.followers}</span> followers ·{' '}
            <span className={s['user-profile__accent']}>{user.following}</span> following
            {user.blog && (
              <>
                {' '}
                ·{' '}
                <a href={user.blog} className="link">
                  {user.blog}
                </a>
              </>
            )}
          </p>
        </div>
      </section>

      <section className={s['repository-list']}>
        <div className={s['repository-list__header']}>
          <h2 className={s['repository-list__title']}>Репозитории</h2>
          <a
            href={`${getGithubUserLink(user.login)}?tab=repositories`}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Все репозитории
          </a>
        </div>

        <div className={s['repository-list__container']}>
          {user.repos.map((repo) => (
            <section className={s['repository-list__item']} key={repo.id}>
              <h3 className={s['repository-list__item-title']}>
                <a
                  className="link"
                  href={getGithubUserRepoLink(user.login, repo.name)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
              {repo.description && <p className={s['repository-list__item-text']}>{repo.description}</p>}
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default React.memo(UserProfilePage);
