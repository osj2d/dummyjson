import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { UserContext, UserStorage } from "./UserContext";
import Conta from "./Components/Conta/Conta";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="conta" element={<Conta />}></Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
