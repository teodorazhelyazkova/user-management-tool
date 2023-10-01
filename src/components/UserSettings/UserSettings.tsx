import React, { FC, useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './UserSettings.module.scss';
import { useData } from '../../AppContext';
import { IUser } from '../User/interface/User.interface';

enum Sorting {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none',
}

enum ColumnHeaders {
  USER = 'USER',
  ROLE = 'ROLE',
  STATUS = 'STATUS',
}

const ICONS = {
  [Sorting.ASC]: <ArrowDropDownIcon className={styles.noneEvent} />,
  [Sorting.DESC]: <ArrowDropUpIcon className={styles.noneEvent} />,
  [Sorting.NONE]: <></>,
};

export const UserSettings: FC = () => {
  const data = useData()!;
  const [sortColumn, setSortColumn] = useState<ColumnHeaders | null>(null);
  const [sortOrder, setSortOrder] = useState<Sorting>(Sorting.NONE);

  const getSortingValue = (prevValue: Sorting): Sorting => {
    if (prevValue === Sorting.NONE) {
      return Sorting.ASC;
    }
    if (prevValue === Sorting.ASC) {
      return Sorting.DESC;
    }
    return Sorting.NONE;
  };

  const sortHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const column = (e.target as HTMLButtonElement).name as ColumnHeaders;

    if (column !== sortColumn) {
      setSortColumn(column);
      setSortOrder(Sorting.ASC);
    } else {
      setSortOrder((prevState) => getSortingValue(prevState));
    }
  };

  useEffect(() => {
    const sortedUsers = [...data.modifiedUsers];

    switch (sortOrder) {
      case Sorting.ASC:
        if (sortColumn === ColumnHeaders.STATUS) {
          sortedUsers.sort(
            (a: IUser, b: IUser) => Number(a.isActive) - Number(b.isActive)
          );
        } else if (sortColumn == ColumnHeaders.USER) {
          sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else {
          sortedUsers.sort((a, b) => a.role.localeCompare(b.role));
        }
        break;

      case Sorting.DESC:
        if (sortColumn === ColumnHeaders.STATUS) {
          sortedUsers.sort(
            (a: IUser, b: IUser) => Number(b.isActive) - Number(a.isActive)
          );
        } else if (sortColumn == ColumnHeaders.USER) {
          sortedUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
        } else {
          sortedUsers.sort((a, b) => b.role.localeCompare(a.role));
        }
        break;

      default:
        break;
    }

    data.setModifiedUsers(sortedUsers);
  }, [sortColumn, sortOrder]);

  return (
    <section className={styles.UserSettings}>
      <div className={styles.UserSettings__Placeholder}></div>
      <div className={styles.UserSettings__Container}>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__User}`}
        >
          <button name={ColumnHeaders.USER} onClick={sortHandler}>
            {ColumnHeaders.USER}
            {sortColumn === ColumnHeaders.USER &&
              ICONS[sortOrder || Sorting.NONE]}
          </button>
        </div>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__Role}`}
        >
          <button name={ColumnHeaders.ROLE} onClick={sortHandler}>
            {ColumnHeaders.ROLE}
            {sortColumn === ColumnHeaders.ROLE &&
              ICONS[sortOrder || Sorting.NONE]}
          </button>
        </div>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__Status}`}
        >
          <button name={ColumnHeaders.STATUS} onClick={sortHandler}>
            {ColumnHeaders.STATUS}
            {sortColumn === ColumnHeaders.STATUS &&
              ICONS[sortOrder || Sorting.NONE]}
          </button>
        </div>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__Actions}`}
        >
          <button>ACTIONS</button>
        </div>
      </div>
    </section>
  );
};
