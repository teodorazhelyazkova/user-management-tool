import { FC } from 'react';
import styles from './UsersList.module.scss';
import { User } from '../User/User';
import data from '../../data/data.json';

export const UsersList: FC = () => {
  return (
    <section className={styles.UsersList}>
      {data.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};
