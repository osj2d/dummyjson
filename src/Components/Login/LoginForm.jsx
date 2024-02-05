import React from "react";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";
import Input from "../Form/input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input label="username" type="text" name="username" {...username} />
      <Input label="password" type="password" name="password" {...password} />
      {loading ? <Button disabled>Loading</Button> : <Button>Entrar</Button>}

      {error && <p>Deu errado: {error}</p>}
    </form>
  );
};

export default LoginForm;
