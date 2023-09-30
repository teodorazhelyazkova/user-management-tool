import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/container/Container';

export const RootLayout: FC = () => {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
