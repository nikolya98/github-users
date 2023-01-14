import * as React from 'react';

import { User } from 'types/user';
import { getGithubUserLink } from 'utils/getGithubUserLink';
import { getGithubUserRepoLink } from 'utils/getGithubUserRepoLink';
import { Link } from 'components/Link';

import s from './ReposList.module.scss';

export type ReposListProps = {
  user: User;
};

const ReposList: React.FC<ReposListProps> = ({ user }) => {
  if (user.repos.length === 0) {
    return null;
  }

  return (
    <section className={s['repository-list']}>
      <div className={s['repository-list__header']}>
        <h2 className={s['repository-list__title']}>Репозитории</h2>
        <Link element="a" href={`${getGithubUserLink(user.login)}?tab=repositories`}>
          Все репозитории
        </Link>
      </div>

      <div className={s['repository-list__container']}>
        {user.repos.map((repo) => (
          <section className={s['repository-list__item']} key={repo.id}>
            <h3 className={s['repository-list__item-title']}>
              <Link element="a" href={getGithubUserRepoLink(user.login, repo.name)}>
                {repo.name}
              </Link>
            </h3>
            {repo.description && <p className={s['repository-list__item-text']}>{repo.description}</p>}
          </section>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ReposList);
