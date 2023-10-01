import React, { FC } from 'react';
import cn from 'classnames';
import './FloatingLabel.scss';
import styles from './InputField.module.scss';

interface InputFieldProps {
  type: string;
  readOnly: boolean;
  name: string;
  isValid: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const InputField: FC<InputFieldProps> = (props) => {
  return (
    <div className={styles.Input}>
      <input
        placeholder={props.label}
        className={cn(styles.Input__Control, styles.Input__Field, {
          invalid: !props.isValid,
        })}
        type={props.type}
        name={props.name}
        readOnly={props.readOnly}
        autoComplete="off"
        onChange={props.onChange}
      />
      <label
        htmlFor={props.name}
        className={`${styles.Input__Field__Label} ${styles.Label__Control}`}
      >
        {props.label}
      </label>
    </div>
  );
};
