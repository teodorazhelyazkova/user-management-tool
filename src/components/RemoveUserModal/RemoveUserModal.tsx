import { FC } from 'react';
import cn from 'classnames';
import { SubmitButton } from '../shared/SubmitButton/SubmitButton';
import { useNavigation } from 'react-router-dom';
import { IUser } from '../User/interface/User.interface';
import { useData } from '../../AppContext';
import FaceIcon from '@mui/icons-material/Face';
import styles from './RemoveUserModal.module.scss';
import { Title } from '../Title/Title';

interface IRemoveUserModalProps {
  isVisible: boolean;
  id: string;
  isActive: boolean;
  fullName: string;
  onClose: () => void;
}

export const RemoveUserModal: FC<IRemoveUserModalProps> = ({
  id,
  isActive,
  fullName,
  isVisible,
  onClose,
}) => {
  const data = useData()!;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const removeUserHandler = () => {
    const newUsers = data.users.filter((user: IUser) => user.id !== id);
    data.setUsers(newUsers);
    onClose();
  };

  return (
    <section
      className={cn(styles.RemoveUserModal, {
        hidden: !isVisible,
      })}
    >
      <Title title="Delete User" />
      <div className={styles.RemoveUserModal__ContentContainer}>
        <div className={styles.RemoveUserModal__Content}>
          <FaceIcon className={styles.RemoveUserModal__Icon} />
          <p>{fullName}</p>
          <p
            className={cn({
              active: isActive,
            })}
          >
            {isActive ? 'Active' : 'Inactive'} User
          </p>
        </div>
      </div>
      <div className={styles.RemoveUserModal__ButtonContainer}>
        <SubmitButton
          label="Delete User"
          disabled={isSubmitting}
          type="alert"
          size="small"
          onClick={removeUserHandler}
        />
      </div>
    </section>
  );
};
