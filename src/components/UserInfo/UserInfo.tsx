import { FC } from 'react';
import styles from './UserInfo.module.scss';

interface IUserInfoProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const UserInfo: FC<IUserInfoProps> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <div className={styles.UserInfo}>
      <h4>{`${firstName} ${lastName}`}</h4>
      <p className={styles.UserInfo__Email}>{email}</p>
    </div>
  );
};
