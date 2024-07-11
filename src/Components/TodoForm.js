import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers";

const TodoForm = () => {
  const [tarea, setTarea] = useState("");
  const [prioridad, setPrioridad] = useState("gray");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ id: (+new Date()).toString(), tarea, prioridad }));
    setTarea("");
    setPrioridad("gray");
  };

  const options = [
    { value: "gray", label: "Normal" },
    { value: "red", label: "Alta" },
    { value: "yellow", label: "Media" },
    { value: "green", label: "Baja" },
  ];

  return (
    <div className={`shadow-${prioridad}-500/50 rounded-md shadow-md`}>
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col items-center justify-between lg:flex-row"
      >
        <select
          className={`w-full border border-gray-700 px-4 py-[.69rem] hover:bg-gray-600 focus:bg-gray-700 focus:outline-none focus:ring-transparent mobile:rounded-t-md lg:w-[25%] lg:rounded-l-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50`}
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className={`bg-gray-800 checked:bg-${prioridad}-600`}
            >
              {option.label}
            </option>
          ))}
        </select>
        <input
          className={`w-full border border-gray-700 px-4 py-2 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-transparent mobile:rounded-b-md lg:w-[75%] lg:rounded-r-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50`}
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Añadir nueva tarea"
        />
      </form>
    </div>
  );
};

export default TodoForm;
