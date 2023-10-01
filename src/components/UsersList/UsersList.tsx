import { FC } from 'react';
import styles from './UsersList.module.scss';
import { User } from '../User/User';
import { useData } from '../../AppContext';

export const UsersList: FC = () => {
  const data = useData()!;
  // TODO: add filtering
  const filteredUsers = data.users;

  return (
    <section className={styles.UsersList}>
      {filteredUsers.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};
