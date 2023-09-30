import { FC } from 'react';
import styles from './Toggle.module.scss';

export const Toggle: FC = () => {
  return (
    <label className={styles.Toggle}>
      <input className={styles.Toggle__Input} type="checkbox" />
      <div className={styles.Toggle__Fill} />
    </label>
  );
};
