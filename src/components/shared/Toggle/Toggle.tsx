import React, { FC } from 'react';
import styles from './Toggle.module.scss';

interface IToggleProps {
  isActive: boolean;
  onToggleChange: (value: boolean) => void;
}

export const Toggle: FC<IToggleProps> = (props) => {
  const { onToggleChange, isActive } = props;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleChange(e.target.checked);
  };

  return (
    <label className={styles.Toggle}>
      <input
        className={styles.Toggle__Input}
        type="checkbox"
        onChange={changeHandler}
        checked={isActive}
      />
      <div className={styles.Toggle__Fill} />
    </label>
  );
};
