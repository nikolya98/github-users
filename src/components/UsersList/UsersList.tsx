import * as React from 'react';
import { Link } from 'react-router-dom';

import { UsersItem } from 'types/users';
import { getPluralized } from 'utils/getPluralized';
import { ROUTES } from 'config/routes';

import s from './UsersList.module.scss';

export type UsersListProps = {
  users: UsersItem[];
};

const getPluralizedRepos = (reposCount: number): string =>
  getPluralized(reposCount, 'репозиторий', 'репозитория', 'репозиториев');

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className={s['users-list']}>
      {users.map((user) => (
        <section className={s['users-list__item']} key={user.id}>
          <div className={s['users-list__image-container']}>
            <img className={s['users-list__image']} src={user.avatarUrl} alt={`${user.login} avatar`} />
          </div>
          <div>
            <h2>
              <Link className="link" to={ROUTES.user.getPath(user.login)}>
                {user.login}
              </Link>
              {user.publicRepos && <>, {getPluralizedRepos(user.publicRepos)}</>}
            </h2>
            {user.company && <p className={s['users-list__text']}>{user.company}</p>}
          </div>
        </section>
      ))}
    </div>
  );
};

export default React.memo(UsersList);
