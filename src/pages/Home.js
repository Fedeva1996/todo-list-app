import React, { useEffect, useState } from "react";
import TodoHome from "../Components/TodoHome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  useEffect(() => {
    // accion para comprobar que existe el item jwt en el localStorage
    if (jwt) {
      // Si existe: renderizamos el componente
      setShowComponent(true);
    } else {
      // Si No existe: redireccionamos a /login
      setShowComponent(false);
      console.log("llega al redirect");
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showComponent) {
    return null;
  } else {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-4 pt-20">
        <TodoHome />
      </div>
    );
  }
};

export default Home;
