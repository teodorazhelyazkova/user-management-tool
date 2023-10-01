import { FC } from 'react';
import cn from 'classnames';
import styles from './InputError.module.scss';

interface InputErrorProps {
  error?: string;
}

export const InputError: FC<InputErrorProps> = ({ error }) => {
  return <p className={cn(styles.Error)}>{error}</p>;
};
