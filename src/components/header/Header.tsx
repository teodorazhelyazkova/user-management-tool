import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../constants/paths';
import { DASHBOARD_TITLE, USER_SETUP_TITLE } from '../../constants/titles';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { Title } from '../Title/Title';

export const Header: FC = () => {
  const location = useLocation();
  const isDashboardLocation = useMemo(
    () => location.pathname === DASHBOARD_PATH,
    [location.pathname]
  );

  return (
    <header className={styles.Header}>
      <Title
        className={styles.Header__Title}
        title={isDashboardLocation ? DASHBOARD_TITLE : USER_SETUP_TITLE}
      />
      {isDashboardLocation && <Search />}
    </header>
  );
};
