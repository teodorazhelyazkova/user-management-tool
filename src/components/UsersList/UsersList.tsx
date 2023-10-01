import { FC } from 'react';
import styles from './UsersList.module.scss';
import { User } from '../User/User';
import { useData } from '../../AppContext';

export const UsersList: FC = () => {
  const data = useData()!;

  return (
    <section className={styles.UsersList}>
      {data.modifiedUsers.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};
