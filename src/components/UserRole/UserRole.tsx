import { FC } from 'react';
import cn from 'classnames';
import whiteKey from '../../public/assets/white-key.svg';
import grayKey from '../../public/assets/gray-key.svg';
import styles from './UserRole.module.scss';

interface IUserRoleProps {
  role: string;
  isActive: boolean;
}
export const UserRole: FC<IUserRoleProps> = ({ role, isActive }) => {
  return (
    <div className={styles.UserRole}>
      {role === 'Admin' && (
        <div
          className={cn(styles.UserRole__ImageKeyContainer, {
            [styles['UserRole__ImageKeyContainer--active']]: isActive,
          })}
        >
          <img
            className={styles.UserRole__ImageKey}
            src={isActive ? whiteKey : grayKey}
          />
        </div>
      )}
      <h4 className={cn(styles.UserRole, { disabled: !isActive })}>{role}</h4>
    </div>
  );
};
