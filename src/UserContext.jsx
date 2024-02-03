import React from "react";
import { useNavigate } from "react-router-dom";
import { Get_User, Post_Login } from "./api";
import useFetch from "./Hooks/useFetch";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = React.useState(false);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();


  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        navigate("/conta");
      }
    }
    autoLogin();
  }, [navigate]);
  async function getUser(token) {
    const { url, options } = Get_User(token);
    const response = await fetch(url, options);
    if (response.ok === true) return setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = Post_Login({ username, password });
    const { json } = await request(url, options);
    const { token } = await json;
    window.localStorage.setItem("token", token);
    await getUser(token);
    navigate("/conta");
  }
  return (
    <UserContext.Provider value={{ userLogin, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
