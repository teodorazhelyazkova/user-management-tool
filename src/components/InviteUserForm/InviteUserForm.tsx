import cn from 'classnames';
import React, { FC } from 'react';
import { InputField } from '../InputField/InputField';
import { InputError } from '../InputError/InputError';
import { SubmitButton } from '../shared/SubmitButton/SubmitButton';
import styles from './InviteUserForm.module.scss';
import { Title } from '../Title/Title';
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

interface InviteUserFormProps {
  isVisible: boolean;
  isSubmitting: boolean;
  isInputValid: boolean;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error?: string;
}

export const InviteUserForm: FC<InviteUserFormProps> = (props) => {
  return (
    <form
      className={cn(styles.InviteUserForm, {
        [styles.InviteUserForm__Modal]: true,
        hidden: !props.isVisible,
      })}
      onSubmit={props.submitHandler}
    >
      <Title title="Invite New User" />

      <div className={styles.InviteUserForm__Names}>
        <FaceIcon className={styles.InviteUserForm__Icon} />
        <InputField
          type="text"
          readOnly={props.isSubmitting}
          name="firstName"
          isValid={props.isInputValid}
          label="* First Name"
        />
        <InputField
          type="text"
          readOnly={props.isSubmitting}
          name="lastName"
          isValid={props.isInputValid}
          label="* Last Name"
        />
      </div>

      <div className={styles.InviteUserForm__Email}>
        <AlternateEmailIcon className={styles.InviteUserForm__Icon} />
        <InputField
          type="text"
          readOnly={props.isSubmitting}
          name="email"
          isValid={props.isInputValid}
          label="* Email"
        />
      </div>

      <div className={`${styles.InviteUserForm__Role}`}>
        <VpnKeyIcon className={styles.InviteUserForm__Icon} />
        <label htmlFor="role" className={styles.InviteUserForm__Label}>
          * Role
        </label>
        <select
          className={`${styles.InviteUserForm__Select}`}
          name="role"
          placeholder="Role"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      <div className={styles.InviteUserForm__ButtonContainer}>
        <SubmitButton
          disabled={props.isSubmitting}
          label="Send Invitation"
          type={'secondary'}
          size={'small'}
        />
        <InputError error={props.isInputValid ? 'Good to go' : props.error} />
      </div>
    </form>
  );
};
