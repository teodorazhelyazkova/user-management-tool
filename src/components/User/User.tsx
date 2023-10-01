import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { USER_SETUP_PATH } from '../../constants/paths';
import { IUser } from './interface/User.interface';
import userImage from '../../public/assets/user-image.svg';
import disabledUserImage from '../../public/assets/disabled-user-image.svg';
import styles from './User.module.scss';
import { Toggle } from '../shared/Toggle/Toggle';
import { UserInfo } from '../UserInfo/UserInfo';
import { UserRole } from '../UserRole/UserRole';
import { useData } from '../../AppContext';
import ReactDOM from 'react-dom';
import { Overlay } from '../shared/Overlay/Overlay';
import { RemoveUserModal } from '../RemoveUserModal/RemoveUserModal';

interface IUserProps {
  user: IUser;
}

export const User: FC<IUserProps> = ({ user }) => {
  const data = useData()!;
  const userStatusToggleHandler = (value: boolean) => {
    const usersCopy = [...data.users];
    const updatedUserIndex = usersCopy.findIndex((u) => u.id === user.id);
    usersCopy.splice(updatedUserIndex, 1, {
      ...usersCopy[updatedUserIndex],
      isActive: value,
    });

    data.setUsers(usersCopy);
  };
  const portalDiv = document.getElementById('portal')!;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const removeUserHandler = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeHandler = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <div id={user.id} className={styles.User}>
      <div className={styles.User__ImageContainer}>
        <img
          className={styles.User__Image}
          src={user.isActive ? userImage : disabledUserImage}
        />
      </div>
      <div className={styles.User__Content}>
        <UserInfo
          isActive={user.isActive}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />

        <UserRole isActive={user.isActive} role={user.role} />

        <div className={styles.User__ToggleContainer}>
          <Toggle
            isActive={user.isActive}
            onToggleChange={userStatusToggleHandler}
          />
        </div>

        <div className={styles.User__Buttons}>
          <Link
            to={`${USER_SETUP_PATH}/${user.id}`}
            className={cn('button', styles.User__Button)}
          >
            <SettingsIcon />
          </Link>
          <button
            className={cn('button', styles.User__Button)}
            onClick={removeUserHandler}
          >
            <DeleteIcon />
          </button>
        </div>
        {ReactDOM.createPortal(
          <>
            <Overlay isVisible={isModalVisible} onClose={closeHandler} />
            {isModalVisible && (
              <RemoveUserModal
                isVisible={isModalVisible}
                onClose={closeHandler}
                id={user.id}
                isActive={user.isActive}
                fullName={`${user.firstName} ${user.lastName}`}
              />
            )}
          </>,
          portalDiv
        )}
      </div>
    </div>
  );
};
