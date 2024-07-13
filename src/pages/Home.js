import React, { useEffect, useState, useContext } from "react";
import TodoContainer from "../Components/TodoContainer";
import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import { AuthContext } from "../contexts/AuthContexts";

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  console.log(context);
  //console.log(jwt)
  useEffect(() => {
    // accion para comprobar que existe el item jwt en el localStorage
    if (jwt && context.currentUser.authenticated) {
      // Si existe: renderizamos el componente
      setShowComponent(true);
    } else {
      // Si No existe: redireccionamos a /login
      setShowComponent(false);
      console.log("llega al redirect");
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  if (!showComponent) {
    return null;
  } else {
    return (
      <div className="flex flex-1 flex-col items-center w-screen min-h-screen">
        <Menu />
        <TodoContainer />
      </div>
    );
  }
};

export default Home;
