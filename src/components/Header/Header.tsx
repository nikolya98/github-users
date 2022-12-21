import React from 'react';
import cn from 'classnames';
import { useNavigate, createSearchParams, Link, useSearchParams } from 'react-router-dom';

import { Container } from '../Container';

import s from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [searchValue, setSearchValue] = React.useState(() => search.get('query') || '');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchValue.trim().length) {
      return;
    }

    const search = createSearchParams({
      query: searchValue.trim(),
    }).toString();

    navigate({
      pathname: '/search', // todo: вынести
      search,
    });
  };

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <nav>
          <ul className={s['header__navigation-list']}>
            <li className={s['header__navigation-list-item']}>
              <Link to="/users" className={s['header__navigation-link']}>
                Пользователи гитхаба
              </Link>
            </li>
            <li className={s['header__navigation-list-item']}>
              <a className={cn(s['header__navigation-link'], s['header__navigation-link_user'])}>defunct</a>
            </li>
          </ul>
        </nav>

        <div>
          <form className={s['header__search-form']} onSubmit={onSubmit}>
            <input
              type="search"
              className={s['header__search-input']}
              placeholder="Поиск пользователя"
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
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
