import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import { logoutUser } from "../actions/AuthActions";

const Menu = () => {
  const { currentUser, dispatch } = useContext(AuthContext);

  const handleLogout = (event) => {
    event.preventDefault();
    logoutUser(dispatch);
  };

  return (
    <header className="sticky left-0 right-0 top-0 z-10 flex w-full items-center justify-between bg-gray-900 px-4 py-3 shadow-md dark:bg-gray-900">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-50 dark:text-gray-50"
      >
        Todo App
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          to="/home"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
        >
          Home
        </Link>
        <Link
          to="/done"
          className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
        >
          Done
        </Link>
        {currentUser.authenticated ? (
          <Link
            to="/logout"
            className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <div className="flex w-full items-center justify-between gap-3">
            <Link
              to="/register"
              className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-base text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu;
