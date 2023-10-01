import React, { FC } from 'react';
import cn from 'classnames';
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
    <>
      <label>{props.label}</label>
      <input
        className={cn(styles.Input, { invalid: !props.isValid })}
        type={props.type}
        name={props.name}
        readOnly={props.readOnly}
        autoComplete="off"
        onChange={props.onChange}
      />
    </>
  );
};
