import React, { useReducer, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import authReducer from "../reducers/authReducer";

const Authentication = (props) => {
  const initialValue = {
    authenticated: false,
    email: "",
  };

  const [currentUser, dispatch] = useReducer(authReducer, initialValue);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      dispatch({ type: "SET_CURRENT_USER", payload: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Authentication;
