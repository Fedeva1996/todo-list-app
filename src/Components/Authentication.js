import React, { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import authReducer from "../reducers/authReducer";

const Authentication = (props) => {
  const initialValue = {
    authenticated: false,
    email: "",
  };
  const [currentUser, dispatch] = useReducer(authReducer, initialValue);

  return (
    <AuthContext.Provider value={{ currentUser, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default Authentication;
