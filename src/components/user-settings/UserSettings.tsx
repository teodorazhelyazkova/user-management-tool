import React, { FC, useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './UserSettings.module.scss';

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
  const [sorting, setSorting] = useState<{
    USER: Sorting;
    ROLE: Sorting;
    STATUS: Sorting;
  }>({
    [ColumnHeaders.USER]: Sorting.NONE,
    [ColumnHeaders.ROLE]: Sorting.NONE,
    [ColumnHeaders.STATUS]: Sorting.NONE,
  });

  useEffect(() => {
    console.log(sorting);
  }, [sorting]);

  const getSortingValue = (prevValue: Sorting): Sorting => {
    if (prevValue === Sorting.NONE) {
      return Sorting.ASC;
    }
    if (prevValue === Sorting.ASC) {
      return Sorting.DESC;
    }
    return Sorting.NONE;
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButton = (e.target as HTMLButtonElement).name as ColumnHeaders;

    setSorting((prevState) => {
      const prevValue: Sorting = prevState[clickedButton];
      const newValue: Sorting = getSortingValue(prevValue);

      return {
        ...prevState,
        [clickedButton]: newValue,
      };
    });
  };

  return (
    <section className={styles.UserSettings}>
      <div className={styles.UserSettings__Placeholder}></div>
      <div className={styles.UserSettings__Container}>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__User}`}
        >
          <button name={ColumnHeaders.USER} onClick={clickHandler}>
            {ColumnHeaders.USER}
            {ICONS[sorting[ColumnHeaders.USER] || Sorting.NONE]}
          </button>
        </div>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__Role}`}
        >
          <button name={ColumnHeaders.ROLE} onClick={clickHandler}>
            {ColumnHeaders.ROLE}
            {ICONS[sorting[ColumnHeaders.ROLE] || Sorting.NONE]}
          </button>
        </div>
        <div
          className={`${styles.UserSettings__Title} ${styles.UserSettings__Status}`}
        >
          <button name={ColumnHeaders.STATUS} onClick={clickHandler}>
            {ColumnHeaders.STATUS}
            {ICONS[sorting[ColumnHeaders.STATUS] || Sorting.NONE]}
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
