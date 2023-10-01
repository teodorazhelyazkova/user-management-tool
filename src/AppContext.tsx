import React, { createContext, useState, useContext } from 'react';
import { IUser } from './components/User/interface/User.interface';
import data from './data/data.json';

interface IAppContext {
  users: IUser[];
  setUsers: (value: IUser[]) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  modifiedUsers: IUser[];
  setModifiedUsers: (value: IUser[]) => void;
}
export const AppContext = createContext<IAppContext | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const data = useDataProvider();

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useData = () => {
  return useContext(AppContext);
};

const useDataProvider = () => {
  const [users, setUsers] = useState<IUser[]>(data.users);
  const [searchValue, setSearchValue] = useState<string>('');
  const [modifiedUsers, setModifiedUsers] = useState<IUser[]>([]);

  return {
    users,
    searchValue,
    modifiedUsers,
    setUsers,
    setSearchValue,
    setModifiedUsers,
  };
};
