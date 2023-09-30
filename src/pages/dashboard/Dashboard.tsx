import { FC } from 'react';
import { UsersList } from '../../components/UsersList/UsersList';
import { UserSettings } from '../../components/user-settings/UserSettings';
import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  return (
    <section className={styles.Dashboard}>
      <UserSettings />
      <UsersList />
    </section>
  );
};
