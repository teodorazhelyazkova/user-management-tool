import { FC } from 'react';
import whiteKey from '../../public/assets/white-key.svg';
import styles from './UserRole.module.scss';

interface IUserRoleProps {
  role: string;
}
export const UserRole: FC<IUserRoleProps> = ({ role }) => {
  return (
    <div className={styles.UserRole}>
      {role === 'Admin' && (
        <div className={styles.UserRole__ImageKeyContainer}>
          <img className={styles.UserRole__ImageKey} src={whiteKey} />
        </div>
      )}
      <h4>{role}</h4>
    </div>
  );
};
