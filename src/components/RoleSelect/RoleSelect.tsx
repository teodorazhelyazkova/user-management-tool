import { FC } from 'react';
import styles from './RoleSelect.module.scss';

interface IRoleSelectProps {
  defaultValue?: string;
}

const RoleSelect: FC<IRoleSelectProps> = (props: IRoleSelectProps) => {
  return (
    <>
      <label htmlFor="role" className={styles.RoleSelect__Label}>
        * Role
      </label>
      <select
        className={`${styles.RoleSelect__Select}`}
        name="role"
        placeholder="Role"
        {...(props.defaultValue && { defaultValue: props.defaultValue })}
      >
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
    </>
  );
};

export default RoleSelect;
