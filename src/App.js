import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Done from "./pages/Done";
import Menu from "./Components/Menu";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import Authentication from "./Components/Authentication";

function App() {
  return (
    <Authentication>
      <Menu />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/done" Component={Done} />
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/register" Component={RegisterForm} />
      </Routes>
    </Authentication>
  );
}

export default App;
