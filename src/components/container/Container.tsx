import React, { FC } from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
	children: React.ReactNode;
}

export const Container: FC<IContainerProps> = (props) => {
	return <div className={styles.container}>{props.children}</div>;
};
