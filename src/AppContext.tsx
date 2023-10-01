import { createContext, useState, useContext } from 'react';
import { IUser } from './components/User/interface/User.interface';
import data from './data/data.json';

interface IAppContext {
  users: IUser[];
  searchValue: string;
  setSearchValue: (value: string) => void;
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
  const [users, setUsers] = useState(data.users);
  const [searchValue, setSearchValue] = useState<string>('');

  return { users, searchValue, setUsers, setSearchValue };
};
