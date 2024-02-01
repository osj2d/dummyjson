import React from "react";
import { useNavigate } from "react-router-dom";
import { Get_User, Post_Login } from "./api";
import useFetch from "./Hooks/useFetch";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  //   async function getUser(token) {
  //     const { url, options } = Get_User(token);
  //     const { json } = await request(url, options);
  //   }

  async function userLogin(username, password) {
    const { url, options } = Post_Login({ username, password });
    const { json } = await request(url, options);
    const { token } = await json;
    window.localStorage.setItem("token", token);
    // await getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};
