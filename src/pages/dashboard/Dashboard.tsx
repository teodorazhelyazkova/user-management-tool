import { FC } from 'react';
import styles from './Dashboard.module.scss';
import { UsersList } from '../../components/UsersList/UsersList';

export const Dashboard: FC = () => {
  return (
    <section className={styles.Dashboard}>
      <UsersList />
    </section>
  );
};
