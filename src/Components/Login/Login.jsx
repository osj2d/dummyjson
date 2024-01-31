import React from "react";
import UseForm from "../../Hooks/UseForm";
import Input from "../Form/input";
import UserContext from "../../UserContext";
import Button from "../Form/Button";

const Login = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin } = React.useContext(UserContext);

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
    </form>
  );
};

export default Login;
