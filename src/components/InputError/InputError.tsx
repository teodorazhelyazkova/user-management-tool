import { FC } from 'react';
import cn from 'classnames';
import styles from './InputError.module.scss';

interface InputErrorProps {
  error?: string;
}

export const InputError: FC<InputErrorProps> = ({ error }) => {
  return (
    <p
      className={cn(styles.Error, {
        [styles['Error--noError']]: error === 'Good to go',
      })}
    >
      {error}
    </p>
  );
};
