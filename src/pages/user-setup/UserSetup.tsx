import { FC } from 'react';
import styles from './UserSetup.module.scss';
import { useParams } from 'react-router-dom';
import { useData } from '../../AppContext';
import { Title } from '../../components/Title/Title';
import { Accordion } from '../../components/Accordion/Accordion';
import userImg from '../../public/assets/user-image.svg';
import whiteKeyImg from '../../public/assets/white-key.svg';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import { SubmitButton } from '../../components/shared/SubmitButton/SubmitButton';
import { Toggle } from '../../components/shared/Toggle/Toggle';
import { InputField } from '../../components/InputField/InputField';
import { IUser } from '../../components/User/interface/User.interface';
import RoleSelect from '../../components/RoleSelect/RoleSelect';
import cn from 'classnames';

export const UserSetup: FC = () => {
  const data = useData()!;
  const params = useParams();
  const userDetails: IUser | undefined = data.users.find(
    (user) => user.id === params.id
  );

  const userStatusToggleHandler = (value: boolean) => {
    const usersCopy = [...data.users];
    const updatedUserIndex = usersCopy.findIndex(
      (u) => u.id === userDetails?.id
    );
    usersCopy.splice(updatedUserIndex, 1, {
      ...usersCopy[updatedUserIndex],
      isActive: value,
    });

    data.setUsers(usersCopy);
  };

  if (!userDetails) {
    return <></>;
  }

  return (
    <section className={styles.UserSetup}>
      <section className={styles.UserSetup__Profile}>
        <div className={styles.UserSetup__Profile__Container}>
          <div className={styles.UserSetup__Profile__ImgContainer}>
            <img
              alt="main image"
              src={userImg}
              className={styles.UserSetup__Profile__Img}
            />
            <div className={styles.UserSetup__Profile__ImageKeyContainer}>
              <img
                className={styles.UserSetup__Profile__ImageKey}
                src={whiteKeyImg}
              />
            </div>
            <p
              className={cn(styles.UserSetup__Profile__Upload, {
                disabled: !userDetails.isActive,
              })}
            >
              upload a photo
            </p>
          </div>

          <div
            className={cn(styles.UserSetup__Profile__Info, {
              disabled: !userDetails.isActive,
            })}
          >
            <ProfileDetails
              firstName={userDetails.firstName}
              lastName={userDetails.lastName}
            />
            <p className={styles.UserSetup__Profile__Email}>
              {userDetails?.email}
            </p>
          </div>
        </div>

        {userDetails.isActive && (
          <SubmitButton
            label="Resend the invite"
            disabled={false}
            type="primary"
            size="medium"
          />
        )}
      </section>

      <section className={styles.UserSetup__Details}>
        <div className={styles.UserSetup__Details__Container}>
          <Title title="Details" />

          <div className={styles.UserSetup__Details__Form}>
            <div className={styles.UserSetup__Details__Status}>
              <div className={styles.UserSetup__Details__Status__Toggle}>
                <Toggle
                  isActive={userDetails.isActive}
                  onToggleChange={userStatusToggleHandler}
                />
              </div>
              <p>
                The user is{' '}
                <strong>{userDetails.isActive ? 'Active' : 'Inactive'}</strong>
              </p>
            </div>
            <div
              className={cn({
                disabled: !userDetails.isActive,
              })}
            >
              <InputField
                type="text"
                readOnly={false}
                name="firstName"
                isValid
                label="* First Name"
                defaultValue={userDetails.firstName}
              />
              <InputField
                type="text"
                readOnly={false}
                name="lastName"
                isValid
                label="* Last Name"
                defaultValue={userDetails.lastName}
              />
              <RoleSelect defaultValue={userDetails.role} />
            </div>
          </div>
        </div>

        {userDetails.isActive && (
          <div className={styles.UserSetup__Details__Btn}>
            <SubmitButton
              label="Save Changes"
              disabled={false}
              type="secondary"
              size="medium"
            />
          </div>
        )}
      </section>

      <section className={styles.UserSetup__Permissions}>
        <Title title="Permissions" />
        <section
          className={cn({
            disabled: !userDetails.isActive,
          })}
        >
          {userDetails.permissions.map((permissionGroup) => (
            <Accordion
              key={permissionGroup.id}
              userId={userDetails.id}
              groupId={permissionGroup.id}
              status={permissionGroup.status}
              title={permissionGroup.label}
              content={permissionGroup.subpermissions ?? []}
            />
          ))}
        </section>
      </section>
    </section>
  );
};
