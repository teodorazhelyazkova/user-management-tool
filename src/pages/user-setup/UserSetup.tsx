import { FC } from 'react';
import styles from './UserSetup.module.scss';
import { useParams } from 'react-router-dom';
import { useData } from '../../AppContext';
import { Title } from '../../components/Title/Title';
import { Accordion } from '../../components/Accordion/Accordion';

export const UserSetup: FC = () => {
  const data = useData()!;
  const params = useParams();

  const userDetails = data.users.find((user) => user.id === params.id);
  console.log(userDetails);

  return (
    <section className={styles.UserSetup}>
      <section className={styles.UserSetup__Profile}>
        <div>userDetails.avatar</div>
        <div>
          {userDetails?.firstName} {userDetails?.lastName}
        </div>
        <div>{userDetails?.email}</div>
        <button>Resend the invite</button>
      </section>

      <section className={styles.UserSetup__Details}>
        <Title title="Details" />
        <div>isAdmin toggle</div>
        <div>first name text input ${userDetails?.firstName}</div>
        <div>last name text input ${userDetails?.lastName}</div>
        <div>role dropdown ${userDetails?.role}</div>
        <button>Save Changes</button>
      </section>

      <section className={styles.UserSetup__Permissions}>
        <Title title="Permissions" />
        {userDetails?.permissions.map((permissionGroup) => (
          <Accordion
            status={permissionGroup.status}
            title={permissionGroup.label}
            content={permissionGroup.subpermissions ?? []}
          />
        ))}
      </section>
    </section>
  );
};
