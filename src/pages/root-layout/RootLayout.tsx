import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import { FloatingButton } from '../../components/FloatingButton/FloatingButton';
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
