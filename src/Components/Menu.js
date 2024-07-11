import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import { logoutUser } from "../actions/AuthActions";

const Menu = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    // const context = useContext(AuthContext); // currentUser y el dispatch que actualiza el currentUser con authReducer
    // logoutUser(context.dispatch);
  };
  return (
    <header className="sticky left-0 right-0 top-0 z-10 flex items-center justify-between bg-gray-900 px-4 py-3 shadow-md dark:bg-gray-900">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-50 dark:text-gray-50"
        //prefetch={false}
      >
        Todo App
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          to="/home"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          //prefetch={false}
        >
          Home
        </Link>
        <Link
          to="/done"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          //prefetch={false}
        >
          Done
        </Link>
        <Link
          to="/login"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          //prefetch={false}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          //prefetch={false}
        >
          register
        </Link>
        <Link
          to="/logout"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          //prefetch={false}
          onClick={handleLogout}
        ></Link>
      </nav>
    </header>
  );
};
export default Menu;
