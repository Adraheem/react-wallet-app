import React from 'react';
import styles from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
}

function AuthLayout(props: IProps) {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}></aside>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
