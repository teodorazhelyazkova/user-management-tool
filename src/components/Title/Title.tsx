import { FC } from 'react';
import styles from './Title.module.scss';

interface ITitleProps {
  title: string;
  className?: string;
}

export const Title: FC<ITitleProps> = (props: ITitleProps) => {
  return (
    <h1 className={`${styles.Title} ${props.className ?? ''}`}>
      {props.title}
    </h1>
  );
};
