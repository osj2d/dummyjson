import React from "react";
import { useNavigate } from "react-router-dom";

const Conta = () => {
  const [token, setToken] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    if (token === null) {
      navigate("/");
    } else {
      navigate("/conta");
    }
  }, [navigate, token]);

  function handleToken() {
    localStorage.removeItem("token");
    setToken("");
  }
  return (
    <div>
      <p> {token}</p>
      <button onClick={handleToken}>Apagar Token</button>
    </div>
  );
};

export default Conta;
