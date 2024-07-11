import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const listItem = todos.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });

  return <div>{todos.length ? listItem : "Lista vacia"}</div>;
};

export default TodoList;