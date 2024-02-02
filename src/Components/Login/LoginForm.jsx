import React from "react";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";
import { useNavigate, Navigate } from "react-router-dom";
import Input from "../Form/input";
import Button from "../Form/Button";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="username" type="text" name="username" {...username} />
      <Input label="password" type="password" name="password" {...password} />
      <Button>Entrar</Button>
      {error && <p>Deu errado: {error}</p>}
    </form>
  );
};

export default LoginForm;
