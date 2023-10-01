import { FC, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Toggle } from '../shared/Toggle/Toggle';
import styles from './Accordion.module.scss';
import { useData } from '../../AppContext';

interface IAccordionProps {
  title: string;
  status: boolean;
  userId: string;
  groupId: string;
  content: { id: string; label: string; status: boolean }[];
}

export const Accordion: FC<IAccordionProps> = ({
  title,
  userId,
  status,
  groupId,
  content,
}: IAccordionProps) => {
  const data = useData()!;
  const [isActive, setIsActive] = useState<boolean>(false);

  const permissionsStatusToggleHandler = (value: boolean) => {
    const usersCopy = [...data.users];
    const updatedUserIndex = usersCopy.findIndex((u) => u.id === userId);
    const updatedGroupIndex = usersCopy[updatedUserIndex].permissions.findIndex(
      (permissionGroup) => permissionGroup.id === groupId
    );

    // update permission group
    usersCopy[updatedUserIndex].permissions.splice(updatedGroupIndex, 1, {
      ...usersCopy[updatedUserIndex].permissions[updatedGroupIndex],
      status: value,
    });

    const updatedSubpermissions = usersCopy[updatedUserIndex].permissions[
      updatedGroupIndex
    ].subpermissions?.map((subpermission) => {
      return {
        ...subpermission,
        status: value,
      };
    });

    // update subpermissions
    usersCopy[updatedUserIndex].permissions[updatedGroupIndex].subpermissions =
      updatedSubpermissions;

    data.setUsers(usersCopy);
  };

  const subpermissionsStatusToggleHandler = (id: string, value: boolean) => {
    const usersCopy = [...data.users];
    const userIndex = usersCopy.findIndex((u) => u.id === userId);
    const groupIndex = usersCopy[userIndex].permissions.findIndex(
      (permissionGroup) => permissionGroup.id === groupId
    );
    const subpermissionIndex = usersCopy[userIndex].permissions[
      groupIndex
    ].subpermissions?.findIndex((subpermission) => subpermission.id === id);

    console.log(
      subpermissionIndex,
      usersCopy[userIndex].permissions[groupIndex].subpermissions,
      id
    );

    if (subpermissionIndex === undefined || subpermissionIndex < 0) {
      return;
    }

    const subpermissions =
      usersCopy[userIndex].permissions[groupIndex].subpermissions;

    console.log(subpermissions);

    if (!subpermissions) {
      return;
    }

    subpermissions.splice(subpermissionIndex, 1, {
      ...subpermissions[subpermissionIndex],
      status: value,
    });

    data.setUsers(usersCopy);
  };

  return (
    <>
      <div
        className={styles.Accordion__TitleContainer}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.Accordion__Title}>
          {content.length > 0 ? (
            isActive ? (
              <ArrowDropDownIcon />
            ) : (
              <ArrowDropUpIcon />
            )
          ) : (
            <></>
          )}
          {title}
        </div>
        <Toggle
          isActive={status}
          onToggleChange={permissionsStatusToggleHandler}
        />
      </div>
      {isActive &&
        content.map(
          (subPermession: { id: string; label: string; status: boolean }) => (
            <div key={subPermession.id} className={styles.Accordion__ListItem}>
              <li>{subPermession.label}</li>
              <Toggle
                isActive={subPermession.status}
                onToggleChange={(value: boolean) =>
                  subpermissionsStatusToggleHandler(subPermession.id, value)
                }
              />
            </div>
          )
        )}
    </>
  );
};
