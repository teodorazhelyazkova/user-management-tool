import { FC } from 'react';
import styles from './ProfileDetails.module.scss';

interface IProfileDetailsProps {
  firstName: string;
  lastName: string;
}

const ProfileDetails: FC<IProfileDetailsProps> = ({
  firstName,
  lastName,
}: IProfileDetailsProps) => {
  return (
    <div className={styles.ProfileDetails}>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default ProfileDetails;
