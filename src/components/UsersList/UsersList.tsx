import React from 'react';

import { UsersItemApi } from 'types/users';

import s from './UsersList.module.scss';
import { getPluralized } from 'utils/getPluralized';
import { Link } from 'react-router-dom';

export type UsersListProps = {
  users: UsersItemApi[];
};

const getPluralizedRepos = (reposCount: number): string =>
  getPluralized(reposCount, 'репозиторий', 'репозитория', 'репозиториев');

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className={s['users-list']}>
      {users.map((user) => (
        <section className={s['users-list__item']} key={user.id}>
          <div className={s['users-list__image-container']}>
            <img className={s['users-list__image']} src={user.avatar_url} alt={`${user.login} avatar`} />
          </div>
          <div>
            <h2>
              <Link className="link" to={`/users/${user.login}`}>
                {user.login}
              </Link>
              {user.public_repos && <>, {getPluralizedRepos(user.public_repos)}</>}
            </h2>
            {user.company && <p className={s['users-list__text']}>{user.company}</p>}
          </div>
        </section>
      ))}
    </div>
  );
};

export default React.memo(UsersList);
