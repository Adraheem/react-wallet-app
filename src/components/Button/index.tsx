import React, {ButtonHTMLAttributes} from 'react';
import styles from './styles.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({className, text, ...props}: IProps) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {text}
    </button>
  );
}

export default Button;
