import { FC, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../constants/paths';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './FloatingButton.module.scss';
import ReactDOM from 'react-dom';
import { Overlay } from '../shared/Overlay/Overlay';
import { InviteUserModal } from '../InviteUserModal/InviteUserModal';

export const FloatingButton: FC = () => {
  const location = useLocation();
  const portalDiv = document.getElementById('portal')!;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const isDashboardLocation = useMemo(
    () => location.pathname === DASHBOARD_PATH,
    [location.pathname]
  );

  const inviteUserHandler = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeHandler = useCallback(() => {
    setIsModalVisible(false);
  }, []);

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
      {ReactDOM.createPortal(
        <>
          <Overlay isVisible={isModalVisible} onClose={closeHandler} />
          {isModalVisible && (
            <InviteUserModal
              isVisible={isModalVisible}
              onClose={closeHandler}
            />
          )}
        </>,
        portalDiv
      )}
    </div>
  );
};
