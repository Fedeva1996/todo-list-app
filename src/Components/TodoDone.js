import React from "react";
import TodoList from "./TodoDoneList";

const TodoHome = () => {
  return (
    <div className="w-full max-w-xl rounded-lg bg-gray-900 p-6 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
        Todo done list
      </h1>
      <TodoList />
    </div>
  );
};

export default TodoHome;
