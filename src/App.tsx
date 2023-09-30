import { FC } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { DASHBOARD_PATH, USER_SETUP_PATH } from './constants/paths';
import { RootLayout } from './pages/root-layout/RootLayout';
import { UserSetup } from './pages/user-setup/UserSetup';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DataProvider } from './AppContext';

const routesConfig = createRoutesFromElements(
  <Route path={DASHBOARD_PATH} element={<RootLayout />}>
    <Route index element={<Dashboard />} />
    <Route path={USER_SETUP_PATH} element={<UserSetup />} />
  </Route>
);

const router = createBrowserRouter(routesConfig);

export const App: FC = () => {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
};
