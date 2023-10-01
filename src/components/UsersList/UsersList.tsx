import { FC, useMemo } from 'react';
import styles from './UsersList.module.scss';
import { User } from '../User/User';
import { useData } from '../../AppContext';
import { IUser } from '../User/interface/User.interface';

export const UsersList: FC = () => {
  const data = useData()!;

  const filteredUsers = useMemo(() => {
    return data.users.filter((user: IUser) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(data.searchValue.toLowerCase());
    });
  }, [data.searchValue, data.users]);

  return (
    <section className={styles.UsersList}>
      {filteredUsers.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};
