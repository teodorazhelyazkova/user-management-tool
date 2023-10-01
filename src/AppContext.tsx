import { createContext, useState, useContext, useEffect } from 'react';
import { IUser } from './components/User/interface/User.interface';
import data from './data/data.json';

interface IAppContext {
  users: IUser[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  modifiedUsers: IUser[];
}
export const AppContext = createContext<IAppContext | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataProvider = ({ children }: { children: any }) => {
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

  useEffect(() => {
    setModifiedUsers(
      users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue, users]);

  return {
    users,
    searchValue,
    modifiedUsers,
    setUsers,
    setSearchValue,
    setModifiedUsers,
  };
};
