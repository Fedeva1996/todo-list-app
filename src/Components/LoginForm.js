import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import { loginUser } from "../actions/AuthActions";
import Menu from "./Menu";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  //console.log("jwt", jwt);
  const navigate = useNavigate();
  // Importar el contexto
  const context = useContext(AuthContext);

  console.log(context);

  useEffect(() => {
    if (context.currentUser.authenticated === true) {
      navigate("/home");
    }
    setShowComponent(true);
  }, [context.currentUser.authenticated, navigate]);

  const handleSubmit = (event) => {
    //console.log("login the user");
    event.preventDefault();
    if (email === "" || password === "") {
      setError("Datos incompletos");
    } else {
      loginUser({ email, password }, context.dispatch);
      //console.log(context)
    }
  };

  if (showComponent) {
    return (
      <div className="flex min-h-screen w-screen flex-1 flex-col items-center">
        <Menu />
        <div className="flex flex-col items-center justify-center p-4 pt-20">
          <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
            Login
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-2"
          >
            <p className="error">{error ? error : ""}</p>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Password"
            />
            <input
              type="submit"
              value="Login"
              className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
            />
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LoginForm;
