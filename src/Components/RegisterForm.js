import React from "react";

const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-20">
      <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
        Register
      </h1>
      <form className="flex flex-col items-center justify-center gap-2">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Username"
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <input
          type="submit"
          value="Register"
          className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
