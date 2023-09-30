import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components/container/Container';
import { Header } from '../../components/header/Header';
import { FloatingButton } from '../../components/floating-button/FloatingButton';
import styles from './RootLayout.module.scss';

export const RootLayout: FC = () => {
  return (
    <Container>
      <Header />
      <FloatingButton />
      <main className={styles.ContentContainer}>
        <Outlet />
      </main>
    </Container>
  );
};
