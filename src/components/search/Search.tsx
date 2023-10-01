import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useData } from '../../AppContext';
import styles from './Search.module.scss';

export const Search: FC = () => {
  const data = useData()!;

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.setSearchValue(e.target.value);
  };

  return (
    <section className={styles.Search}>
      <input
        className={styles.Search__Bar}
        type="search"
        placeholder="Type to filter the table"
        name="search"
        autoComplete="off"
        onChange={searchHandler}
      />
      <SearchIcon className={styles.Search__Icon} />
    </section>
  );
};
