import React, {InputHTMLAttributes} from 'react';
import styles from "./styles.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function TextInput({className, label, ...props}: IProps) {
  return (
    <div className={styles.container}>
      <label>
        <p>{label}</p>
        <input className={`${styles.input} ${className}`} type="text" {...props} />
      </label>
    </div>
  );
}

export default TextInput;
