import { FC, useMemo } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../constants/paths';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './FloatingButton.module.scss';

export const FloatingButton: FC = () => {
  const location = useLocation();
  const isDashboardLocation = useMemo(
    () => location.pathname === DASHBOARD_PATH,
    [location.pathname]
  );
  const inviteUserHandler = () => {};

  return (
    <div className={styles.Container}>
      <button
        onClick={inviteUserHandler}
        className={cn(styles.FloatingButton, {
          [styles['FloatingButton--blue']]: isDashboardLocation,
          [styles['FloatingButton--gray']]: !isDashboardLocation,
        })}
      >
        {isDashboardLocation ? <AddIcon /> : <SettingsIcon />}
      </button>
    </div>
  );
};
