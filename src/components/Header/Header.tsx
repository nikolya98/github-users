import cn from 'classnames';
import * as React from 'react';
import { useNavigate, createSearchParams, Link, useSearchParams, useParams, useLocation } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import { getGithubUserLink } from 'utils/getGithubUserLink';
import { Container } from '../Container';

import s from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [searchValue, setSearchValue] = React.useState(() => search.get('query') || '');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchValue.length) {
      return;
    }

    const search = createSearchParams({
      query: searchValue,
    }).toString();

    navigate({
      pathname: ROUTES.search.getPath(),
      search,
    });
  };

  // Если есть id - то мы на странице пользователя
  const { id } = useParams();
  const { pathname } = useLocation();

  const LinkElement = pathname !== ROUTES.users.getPath() ? Link : 'span';

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <nav>
          <ul className={s['header__navigation-list']}>
            <li className={s['header__navigation-list-item']}>
              <LinkElement to={ROUTES.users.getPath()} className={s['header__navigation-link']}>
                Пользователи гитхаба
              </LinkElement>
            </li>
            {id && (
              <li className={s['header__navigation-list-item']}>
                <a
                  className={cn(s['header__navigation-link'], s['header__navigation-link_user'])}
                  href={getGithubUserLink(id)}
                >
                  {id}
                </a>
              </li>
            )}
            {pathname === ROUTES.search.getPath() && (
              <li className={s['header__navigation-list-item']}>
                <span className={cn(s['header__navigation-link'])}>Поиск</span>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <form className={s['header__search-form']} onSubmit={onSubmit}>
            <input
              type="search"
              className={s['header__search-input']}
              placeholder="Поиск пользователя"
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value.trim())}
            />
            <button type="submit" className={s['header__search-button']}>
              Найти
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
};

export default React.memo(Header);
