import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/container/Container';
import { Header } from '../components/header/Header';
import { FloatingButton } from '../components/floating-button/FloatingButton';

export const RootLayout: FC = () => {
  return (
    <Container>
      <Header />
      <FloatingButton />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
