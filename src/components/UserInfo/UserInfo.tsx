import { FC } from 'react';
import cn from 'classnames';
import styles from './UserInfo.module.scss';

interface IUserInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

export const UserInfo: FC<IUserInfoProps> = ({
  firstName,
  lastName,
  email,
  isActive,
}) => {
  return (
    <div className={cn(styles.UserInfo, { disabled: !isActive })}>
      <h4>{`${firstName} ${lastName}`}</h4>
      <p className={styles.UserInfo__Email}>{email}</p>
    </div>
  );
};
