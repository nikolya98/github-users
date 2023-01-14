import cn from 'classnames';
import * as React from 'react';

import { getGithubUserLink } from 'utils/getGithubUserLink';
import { User } from 'types/user';
import { Link } from 'components/Link';

import s from './Profile.module.scss';

export type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <section className={s['user-profile']}>
      <div className={s['user-profile__image-container']}>
        <img className={s['user-profile__image']} src={user.avatarUrl} alt={`${user.login} avatar`} />
      </div>
      <div>
        <h1 className={s['user-profile__title']}>
          {user.name && <>{user.name},</>}{' '}
          <Link
            element="a"
            className={cn(s['user-profile__accent'], s['user-profile__link'])}
            href={getGithubUserLink(user.login)}
          >
            {user.login}
          </Link>
        </h1>
        <p className={s['user-profile__text']}>
          <span>
            <span className={s['user-profile__accent']}>{user.followers}</span> followers
          </span>
          <span>
            <span className={s['user-profile__accent']}>{user.following}</span> following
          </span>
          {user.blog && (
            <span>
              <Link element="a" href={user.blog}>
                {user.blog}
              </Link>
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default React.memo(Profile);
