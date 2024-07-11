import React, { useEffect, useState, useContext } from "react";
import TodoHome from "../Components/TodoHome";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContexts';

const Home = (props) => {
  const [showComponent, setShowComponent] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  // importamos el contexto
  const context = useContext(AuthContext);
  
  useEffect(() =>{
    if(context.currentUser.authenticated === true){
      setShowComponent(true);
    } else {
      navigate('/login');
    }
  }, [context.currentUser.authenticated, navigate]);

  if (!showComponent) {
    return null;
  } else {
    return (
      <div>
        <Menu />
        <TodoHome />
      </div>
    );
  }
};

export default Home;
