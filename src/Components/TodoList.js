import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { lista, borrarTarea, checkTarea } = props;

  const onChangeStatus = (e) => {
    //console.log(e.target)
    const { id, checked } = e.target;
    //console.log("onChange", name, checked);
    let itemActual = lista.filter((item) => item._id === id)[0];
    //console.log(itemActual)
    checkTarea({
      ...itemActual,
      done: checked,
    });
    // const updateList = lista.map(item => ({
    //     ...item,
    //     done: item.id === name ? checked : item.done
    // }));
    // console.log(lista);
    // checkTarea(updateList);
  };

  //console.log(lista)
  const listItem = lista.map((item) => {
    return (
      <div
        key={item._id}
        className="flex items-center justify-between rounded-md bg-slate-700 p-2 my-2"
      >
        <TodoItem key={item._id} item={item} onChange={onChangeStatus} />
        <button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:scale-110 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          disabled={!item.tarea}
          onClick={() => borrarTarea(item._id)}
        >
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Delete</span>
        </button>
      </div>
    );
  });

  return <>{lista.length ? listItem : "Lista vacia"}</>;
};

export default TodoList;

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
