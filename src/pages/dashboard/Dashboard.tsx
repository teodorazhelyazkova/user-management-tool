import { FC } from 'react';
import { UsersList } from '../../components/UsersList/UsersList';
import { DashboardHeader } from '../../components/DashboardHeader/DashboardHeader';
import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  return (
    <section className={styles.Dashboard}>
      <DashboardHeader />
      <UsersList />
    </section>
  );
};
