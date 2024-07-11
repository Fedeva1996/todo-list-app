import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const listItemFiltered = todos
    .filter((item) => item.done)
    .map((item) => {
      return <TodoItem key={item.id} item={item} />;
    });

  return <div>{listItemFiltered.length ? listItemFiltered : "Lista vacia, aún no completaste ninguna tarea :("}</div>;
};

export default TodoList;
