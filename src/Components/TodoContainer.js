import React, { useReducer, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { getTareas } from "../actions/TareasActions";
import listReducer from "../reducers/listReducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const context = useContext(AuthContext);
  //console.log("context", context);
  const [nuevaLista, actualizarNuevaLista] = useState(false)
  // TODO: hacer get de todas las tareas existentes del usuario.
  const [lista, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    async function fetchData() {
      //console.log("email", context.currentUser.email)
      const tasks = await getTareas(context.currentUser.email);
      // console.log('tasks', tasks);
      dispatch({
        type: "initial",
        payload: tasks,
      });
      actualizarNuevaLista(false)
      //console.log("tasks", tasks);
      //console.log(lista)
    }
    fetchData();
  }, [nuevaLista]);

  const handleAddTarea = (objetoTarea) => {
    // console.log("objeto", objetoTarea)
    // setLista([...lista, objetoTarea])
    dispatch({
      type: "agregar",
      payload: objetoTarea,
    });
    actualizarNuevaLista(true)
  };
  const borrarTarea = (id) => {
    // setLista(lista.filter((item) => item.id !== id));
    dispatch({
      type: "borrar",
      id,
    });
  };
  const checkTarea = (objetoTarea) => {
    // setLista([...lista, objetoTarea]);
    console.log("checkeando", objetoTarea);
    dispatch({
      type: "chequear",
      payload: objetoTarea,
    });
  };

  return (
    <div className="w-full max-w-xl rounded-lg bg-gray-900 p-6 dark:bg-gray-900 mt-5">
      <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
        Todo list
      </h1>
      <TodoForm handleAddTarea={handleAddTarea} />
      <TodoList
        lista={lista}
        borrarTarea={borrarTarea}
        checkTarea={checkTarea}
      />
    </div>
  );
};

export default TodoContainer;
