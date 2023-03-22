import React from 'react';
import AuthLayout from "../../components/AuthLayout";
import styles from "./styles.module.scss";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

function LoginPage() {
  return (
    <AuthLayout>
      <div className={styles.header}>
        <h1>Welcome Back!</h1>
        <p>Log in to your Dashboard</p>
      </div>

      <TextInput label="Email" placeholder="Email"/>
      <TextInput label="Password" placeholder="Password"/>
      <div>
        <Button className={styles.button} text="Login"/>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;