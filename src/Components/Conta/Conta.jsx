import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Get_User } from "../../api";

const Conta = () => {

  const [token, setToken] = React.useState("");
  const navigate = useNavigate();


  React.useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <p> {token}</p>
      <button onClick={() => localStorage.removeItem("token")}>
        Apagar Token
      </button>
    </div>
  );
};

export default Conta;
