import { FC } from 'react';
import cn from 'classnames';
import styles from './SubmitButton.module.scss';

interface ISubmitButtonProps {
  label: string;
  disabled: boolean;
  type: string;
  size: string;
  onClick?: () => void;
}

export const SubmitButton: FC<ISubmitButtonProps> = ({
  type,
  size,
  label,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className={cn(styles.SubmitButton, {
        [styles['SubmitButton--primary']]: type === 'primary',
        [styles['SubmitButton--secondary']]: type === 'secondary',
        [styles['SubmitButton--alert']]: type === 'alert',
        [styles['SubmitButton--small']]: size === 'small',
        [styles['SubmitButton--medium']]: size === 'medium',
      })}
    >
      {label}
    </button>
  );
};
