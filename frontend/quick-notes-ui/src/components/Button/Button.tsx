import React from 'react';
import styles from './Button.module.scss';

type Props = {
  id?: string;
  label: string;
  disabled?: boolean;
  theme?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = ({
  id,
  label,
  disabled,
  theme,
  onClick,
}: Props): JSX.Element => {
  return (
    <span className={styles.button}>
      <button id={id} onClick={(e) => onClick(e)} disabled={disabled}>
        {label}
      </button>
    </span>
  );
};

export default Button;
