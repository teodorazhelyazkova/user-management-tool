import { FC, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Toggle } from '../shared/Toggle/Toggle';
import styles from './Accordion.module.scss';

interface IAccordionProps {
  title: string;
  status: boolean;
  content: { id: string; label: string; status: boolean }[];
}

export const Accordion: FC<IAccordionProps> = ({
  title,
  content,
}: IAccordionProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles.Accordion__TitleContainer}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          {content.length > 0 ? (
            isActive ? (
              <ArrowDropDownIcon />
            ) : (
              <ArrowDropUpIcon />
            )
          ) : (
            <></>
          )}
          {title}
        </div>
        <Toggle />
      </div>
      {isActive &&
        content.map(
          (subPermession: { id: string; label: string; status: boolean }) => (
            <div key={subPermession.id} className={styles.Accordion__ListItem}>
              <li>{subPermession.label}</li>
              <Toggle />
            </div>
          )
        )}
    </>
  );
};
