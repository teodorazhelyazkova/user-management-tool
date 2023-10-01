import { FC } from 'react';
import cn from 'classnames';
import styles from './InputError.module.scss';

interface InputErrorProps {
  error?: string;
}

export const InputError: FC<InputErrorProps> = ({ error }) => {
  const errorVisibility = !error ? 'hidden' : undefined;

  return (
    <p
      data-testid="errorParagraph"
      className={cn(styles.Error, errorVisibility)}
    >
      {error}
    </p>
  );
};
