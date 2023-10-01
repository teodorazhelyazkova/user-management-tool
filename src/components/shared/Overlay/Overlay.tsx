import { FC } from 'react';
import cn from 'classnames';
import styles from './Overlay.module.scss';

interface IOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Overlay: FC<IOverlayProps> = (props) => {
  return (
    <div
      className={cn({
        [styles.Overlay]: true,
        hidden: !props.isVisible,
      })}
      onClick={props.onClose}
    />
  );
};
